import { PostPhoneService } from "./services/phone.service.js";
import { PostMailService } from "./services/email.service.js";
import { createBoardAPI } from "./services/og_scraping.service.js";
import { User } from "../models/userSchema.js";
import { Token } from "../models/tokenSchema.js";

export class PostuserController {
  // 핸드폰 체크
  checkPhone = async (req, res) => {
    const postphoneService = new PostPhoneService();
    const isValidationPhone = postphoneService.checkValidationPhone(
      req.body.phone
    );

    // 핸드폰 번호 자리 체크
    if (isValidationPhone) {
      const userInfo = req.body;
      const { prefer, phone, name, email, personal, pwd } = userInfo;
      const token = await Token.findOne({ phone });
      const og = await createBoardAPI(prefer);

      if (token === null || token.isAuth === false) {
        res.status(422).send("ERROR");
      } else {
        const userProfile = new User({
          name,
          email,
          personal,
          prefer,
          pwd,
          phone,
          og: og,
        });
        await userProfile.save();
        res.send(userProfile.id);
      }
    }
  };

  // 이메일 체크
  checkUserProfile = (req, res) => {
    const userInfo = req.body;
    const { email } = userInfo;

    // 1. 이메일의 양식을 체크한다.
    const postMailService = new PostMailService();
    const isValid = postMailService.checkValidationEmail(email);

    if (isValid) {
      return true;
      // 2. 맞으면 템플릿을 만든다.
      // const mytemplate = getWelcomeTemplate(userInfo);
      // 3. 템플릿을 전송한다.
      // sendTemplateToEmail(email, mytemplate);
    }
    res.send(userInfo);
  };
}
