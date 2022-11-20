import { Document, model, Schema } from "mongoose";
import { registrationType, RoleTypes } from "../../utils/constants";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  email: string;
  password: string;
  role: RoleTypes;
  profile: Schema.Types.ObjectId;
  passwordResetToken: string;
  emailConfirmationToken: string;
  registrationType: registrationType;
  validatePassword: (password: string) => boolean;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  passwordResetToken: {
    type: String,
  },
  emailConfirmationToken: {
    type: String,
  },
  registrationType: {
    type: String,
    enum: registrationType,
  },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error: any) {
    return next(error);
  }
});

userSchema.methods.validatePassword = function (password: string) {
  const passwordIsValid = bcrypt.compareSync(password, this.password);
  return passwordIsValid;
};

const User = model("User", userSchema);
export default User;
