import User from "./user.model";

class userService {
  createUser = async (registerDetails: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    role?: string;
  }) => {
    const newUser = await User.create({
      email: registerDetails.password,
      password: registerDetails.password,
    });

    return newUser;
  };
}

export default new userService();
