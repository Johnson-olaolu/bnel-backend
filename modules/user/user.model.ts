import { Document, model, Schema } from "mongoose";
import { registrationType, RoleType } from "../../utils/constants";

export interface IUser extends Document {
  email: string;
  password: string;
  role: Schema.Types.ObjectId;
  profile: Schema.Types.ObjectId;
  passwordResetToken: string;
  emailConfirmationToken: string;
  registrationType: registrationType;
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
    enum: RoleType,
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

const User = model("User", userSchema);
export default User;
