import { UnprocessableEntityException, UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "../user.service";
import { AuthService } from "./auth.service";
import * as bcrypt from 'bcrypt';
import { CurrentUser } from "src/commons/auth/gql-user-param";
import { GqlAuthRefreshGuard } from "src/commons/auth/gql-auth.guard";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ){}

    // 로그인 부분 ===============================================
    @Mutation(() => String)
    async login(
        @Args('email') email: string,
        @Args('password') password: string,
        @Context() context: any,
    ){
        const user = await this.userService.findOne({ email }); // auto

        // 이메일이 일치하는 유저 없으면 에러 던진다.
        if(!user) throw new UnprocessableEntityException('이메일이 없습니다!!')

        // 일치하는 유저는 있되, 비번은 틀린 유저에게 던지는 에러
        const isAuth = await bcrypt.compare(password, user.pwd);
        if(!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다!!');


        this.authService.setRefreshToken({user, res: context.req.res})

        // 로그인시 회원의 아이디와 비밀번호가 검증되면 accessToken을 만들어 클라이언트에게 보내줍니다.
        return this.authService.getAccessToken({user});
    }

    @UseGuards(GqlAuthRefreshGuard)
    @Mutation(() => String)
    restoreAccessToken(@CurrentUser() CurrentUser: any){
        return this.authService.getAccessToken({user: CurrentUser})
    }
}