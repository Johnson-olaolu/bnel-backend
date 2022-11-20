import Permission, { IPermission } from "./permission.model";

class permissionService {
  createPermission = async (permission: IPermission) => {
    const newPermission = await Permission.create(permission);
    return newPermission;
  };
}

export default new permissionService();
