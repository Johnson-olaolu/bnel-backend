import { model, Schema } from "mongoose";
import { PermissionTypes } from "../../../utils/constants";

export interface IPermission {
  title: PermissionTypes;
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
