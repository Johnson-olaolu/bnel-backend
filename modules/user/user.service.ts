import { RoleTypes } from "../../utils/constants";
import Profile from "./profile/profile.model";
import User from "./user.model";

class userService {
  createUser = async (registerDetails: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    role?: RoleTypes;
  }) => {
    const newUser = await User.create({
      email: registerDetails.password,
      password: registerDetails.password,
      role: registerDetails.role ? registerDetails.role : "user",
    });

    const userProfile = await Profile.create({
      firstName: registerDetails.firstName,
      lastName: registerDetails.lastName,
      middleName: registerDetails.middleName,
    });
    newUser.profile = userProfile.id;
    await newUser.save();
    return newUser.populate("profile");
  };
}

export default new userService();
