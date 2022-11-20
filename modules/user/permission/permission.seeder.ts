import Permission, { IPermission } from "./permission.model";

const permissions: IPermission[] = [
  {
    title: "product:create",
    description: "create products",
  },
  {
    title: "product:edit",
    description: "edit products",
  },
  {
    title: "product:delete",
    description: "delete products",
  },
  {
    title: "product:view",
    description: "view products",
  },
  {
    title: "collections:create",
    description: "create collection",
  },
  {
    title: "collections:edit",
    description: " edit collction",
  },
  {
    title: "collections:delete",
    description: "delete collections",
  },
  {
    title: "collections:view",
    description: "view collections",
  },
  {
    title: "admin:view",
    description: "view admin",
  },
  {
    title: "admin:create",
    description: "create admin",
  },
  {
    title: "admin:delete",
    description: "delete admin",
  },
  {
    title: "admin:edit",
    description: "edit admin",
  },
];

export const seedPermissions = async () => {
  for (const permission of permissions) {
    const existingPermission = await Permission.findOne({
      title: permission.title,
    });
    if (!existingPermission) {
      const newPermission = await Permission.create(permission);
      console.log(newPermission);
    }
  }
};
