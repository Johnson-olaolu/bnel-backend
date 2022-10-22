import { model, Schema } from "mongoose";

export interface IPermission {
  title: string;
  description: string;
}

const permissionSchema = new Schema<IPermission>({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    required: true,
  },
});

const Permission = model("Permission", permissionSchema);
export default Permission;
