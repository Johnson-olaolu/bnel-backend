import { Request } from "express";
import expressAsyncHandler from "express-async-handler";
import { ApplicationError } from "../../utils/errors";
import userService from "../user/user.service";
import authService from "./auth.service";
import authValidator from "./auth.validator";
import passport from "passport";

/**
 * register new user.
 * @public
 */
export const register = expressAsyncHandler(async (req, res) => {
  const { error } = authValidator.register.validate(req.body);
  if (error) {
    throw new ApplicationError(error.message, 400);
  }
  const createdUser = await userService.createUser(req.body);
  const data = await authService.loginUser(createdUser);
  res.json({
    success: true,
    message: "User registered successfully",
    data,
  });
});

export const login = expressAsyncHandler(async (req, res, next) => {
  const { error } = authValidator.login.validate(req.body);
  if (error) {
    console.log(error);
    throw new ApplicationError(error.message, 400);
  }
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error(info.message);
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const data = await authService.loginUser(user);
        return res.json({
          success: true,
          message: "User Logged in successfully",
          data,
        });
      });
    } catch (error) {
      res.status(400);
      return next(error);
    }
  })(req, res, next);
});

export const getGoogleLink = expressAsyncHandler(async (req, res) => {
  const data = await authService.getGoogleLink();
  res.json({
    success: true,
    message: "Link fetched successfully",
    data,
  });
});

export const googleLogin = expressAsyncHandler(async (req, res, next) => {
  const data = await authService.loginWithGoogle(req.body);
  res.json({
    success: true,
    message: "Logged in successfullly",
    data,
  });
});
