import User from "./user.model";

const superAdmin = {
  email: "superadmin@bnel.com",
  password: "super-admin",
  role: "super-admin",
};

export const seedSuperAdmin = async () => {
  const sa = await User.create(superAdmin);
  console.log(sa);
};
