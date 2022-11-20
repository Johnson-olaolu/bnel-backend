export type RoleTypes = "super-admin" | "admin" | "user";

export enum registrationType {
  GOOGLE = "GOOGLE",
  DEFAULT = "DEFAULT",
}

export type PermissionTypes =
  | "product:view"
  | "product:edit"
  | "product:create"
  | "product:delete"
  | "collections:view"
  | "collections:edit"
  | "collections:create"
  | "collections:delete"
  | "admin:create"
  | "admin:view"
  | "admin:delete"
  | "admin:edit";
