#! /usr/bin/env node

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware";
import routes from "./routes/index.routes";
import { ConnectDB } from "./config/config";
import { program } from "commander";
import { seedPermissions } from "./modules/user/permission/permission.seeder";
import { seedRoles } from "./modules/user/role/role.seeder";
import { seedSuperAdmin } from "./modules/user/user.seeder";
import { initializePassport } from "./services/passport.service";
dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 5000;

//connect DB
ConnectDB();

app.get("/v1/api", (req: Request, res: Response) => {
  res.send("BNEL API");
});

//initialize passpoert
initializePassport();

//commands
program.command("seed:permissions").description("Seed Site Permissions").action(seedPermissions);
program.command("seed:roles").description("Seed Site Roles").action(seedRoles);
program.command("seed:superAdmin").description("Seed Super Admin").action(seedSuperAdmin);

app.use("/v1/api", routes);

//error middleware
app.use(notFound, errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// program.parse();
