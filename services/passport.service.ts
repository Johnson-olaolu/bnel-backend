import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import OAuth2Strategy from "passport-oauth2";
import User from "../modules/user/user.model";

const OAUTH_AUTHORIZATION_URL = process.env.OAUTH_AUTHORIZATION_URL;
const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const OAUTH_CALLBACK_URL = process.env.OAUTH_CALLBACK_URL;
const OAUTH_TOKEN_URL = process.env.OAUTH_TOKEN_URL;

export const initializePassport = () => {
  passport.use(
    "login",
    new LocalStrategy({ usernameField: "email", passwordField: "password" }, async function (username, password, done) {
      try {
        const user = await User.findOne({ email: username });
        if (!user) {
          return done(null, false, { message: "User Not Found" });
        }
        const passwordIsValid = user.validatePassword(password);
        if (!passwordIsValid) {
          return done(null, false, {
            message: "Wrong Password",
          });
        }
        return done(null, user, { message: "Logged in Successfully" });
      } catch (error) {
        if (error instanceof Error) {
          return done(null, false, { message: error.message });
        }
        return done(null, false, { message: "unsuccesfull" });
      }
    })
  );

  // passport.use(
  //   "google",
  //   new OAuth2Strategy(
  //     {
  //       authorizationURL: OAUTH_AUTHORIZATION_URL,
  //       tokenURL: OAUTH_TOKEN_URL,
  //       clientID: OAUTH_CLIENT_ID,
  //       clientSecret: OAUTH_CLIENT_SECRET,
  //       callbackURL: OAUTH_CALLBACK_URL,
  //     },
  //     function (accessToken: any, refreshToken: any, profile: any, done: any) {
  //       console.log({ accessToken, refreshToken, profile, done });
  //       // User.findOrCreate({ exampleId: profile.id }, function (err, user) {
  //       //   return cb(err, user);
  //       // });
  //     }
  //   )
  // );
};
