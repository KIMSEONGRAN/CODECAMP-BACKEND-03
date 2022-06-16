import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from '../../commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from '../../commons/auth/gql-user-param';
import { Payment } from './entities/payment.entity';
import { PaymentService } from './payment.service';

@Resolver()
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Payment)
  createPayment(
    @Args('impUid') impUid: string,
    @Args('amount') amount: number,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    console.log(impUid);
    return this.paymentService.create({ impUid, amount, currentUser });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Payment)
  cancelPayment(
    @Args('impUid') impUid: string,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    console.log(impUid);
    return this.paymentService.refund({
      impUid,
      currentUser,
    });
  }
}
