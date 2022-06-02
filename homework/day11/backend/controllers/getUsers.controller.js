import { GetUsers } from "./services/getUsers.service.js";

export class GetuserController {
  getUserprofile = async (req, res) => {
    // 받아온 데이터를 응답으로 보여준다
    const getUsers = new GetUsers();
    const profile = await getUsers.getUser();
    res.send(profile);
  };
}
