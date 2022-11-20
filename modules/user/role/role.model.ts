import { model, Schema } from "mongoose";
import { PermissionTypes, RoleTypes } from "../../../utils/constants";

export interface IRole {
  title: RoleTypes;
  description: string;
  permissions: PermissionTypes[];
}

const roleSchema = new Schema<IRole>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  permissions: {
    type: [
      {
        type: String,
      },
    ],
    required: true,
  },
});

const Role = model("Role", roleSchema);
export default Role;
