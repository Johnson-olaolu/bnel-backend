import * as jwt from "jsonwebtoken";
import { IUser } from "../user/user.model";

class authService {
  loginUser = (user: IUser) => {
    const body = { id: user._id, email: user.email };
    const token = jwt.sign({ user: body }, process.env.JWT_SECRET as string);
    return {
      token: token,
      user: user,
    };
  };
}

export default new authService();
