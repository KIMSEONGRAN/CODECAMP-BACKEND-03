import mongoose from "mongoose";
import { User } from "../../models/userSchema.js";
mongoose.connect("mongodb://my-database:27017/Mini-Project1");

export class GetUsers {
  // 스키마 양식의 유저 데이터 전체를 찾아와서 반환한다.
  getUser = async () => {
    const result = await User.find();
    return result;
  };
}
