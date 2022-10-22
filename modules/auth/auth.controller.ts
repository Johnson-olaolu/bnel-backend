import { Request } from "express";
import expressAsyncHandler from "express-async-handler";
import { ApplicationError } from "../../utils/errors";
import userService from "../user/user.service";
import authServices from "./auth.services";
import authValidator from "./auth.validator";

/**
 * register new user.
 * @public
 */
export const register = expressAsyncHandler(async (req, res) => {
  const { error } = authValidator.register.validate(req.body);
  console.log(error);
  if (error) {
    console.log(error);
    throw new ApplicationError(error.message, 400);
  }
  const createdUser = await userService.createUser(req.body);
  const data = await authServices.loginUser(createdUser);
  res.json({
    success: true,
    message: "User registered successfully",
    data,
  });
});
