import { model, Schema } from "mongoose";

const profileSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  profilePic: {
    type: String,
  },
});

const Profile = model("Profile", profileSchema);
export default Profile;
