import * as jwt from "jsonwebtoken";
import axios from "axios";
import { IUser } from "../user/user.model";

class authService {
  loginUser = (user: IUser) => {
    const body = { id: user._id, email: user.email };
    const token = jwt.sign({ user: body }, process.env.SECRET_KEY as string);
    return {
      token: token,
      user: user,
    };
  };
  getGoogleLink = () => {
    return `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${process.env.OAUTH_CALLBACK_URL}&client_id=${process.env.OAUTH_CLIENT_ID}`;
  };

  loginWithGoogle = async (googleDetails: { state: string; access_token: string; token_type: string; expires_in: string; scope: string }) => {
    const response = await axios.get("https://people.googleapis.com/v1/people/me", {
      headers: {
        Authorization: `${googleDetails.token_type} ${googleDetails.access_token}`,
      },
    });
    console.log(response);
    return response.data;
  };
}

export default new authService();
