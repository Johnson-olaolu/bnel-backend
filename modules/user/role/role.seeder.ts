import { PermissionTypes, RoleTypes } from "../../../utils/constants";
import Permission from "../permission/permission.model";
import Role from "./role.model";

const roles: {
  title: RoleTypes;
  description: string;
  permissions: PermissionTypes[];
}[] = [
  {
    title: "user",
    description: "single user",
    permissions: ["collections:view", "product:view"],
  },
  {
    title: "admin",
    description: "site admin",
    permissions: [
      "collections:create",
      "collections:delete",
      "collections:edit",
      "collections:view",
      "product:create",
      "product:delete",
      "product:edit",
      "product:view",
    ],
  },
  {
    title: "super-admin",
    description: "site admin",
    permissions: [
      "collections:create",
      "collections:delete",
      "collections:edit",
      "collections:view",
      "product:create",
      "product:delete",
      "product:edit",
      "product:view",
      "admin:create",
      "admin:delete",
      "admin:edit",
      "admin:view",
    ],
  },
];

export const seedRoles = async () => {
  for (const role of roles) {
    const existingRole = await Role.findOne({
      title: role.title,
    });
    if (!existingRole) {
      const newRole = await Role.create({
        title: role.title,
        description: role.description,
        permissions: role.permissions,
      });
      console.log(newRole);
    }
  }
};
