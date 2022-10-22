import { model, Schema } from "mongoose";
import { RoleType } from "../../../utils/constants";
import { IPermission } from "../permission/permission.model";

export interface IRole {
  title: RoleType;
  description: string;
  permissions: Schema.Types.ObjectId[] | IPermission[];
}

const roleSchema = new Schema<IRole>({
  title: {
    type: String,
    enum: RoleType,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  permissions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Permission",
    },
  ],
});

const Role = model("Role", roleSchema);
export default Role;
