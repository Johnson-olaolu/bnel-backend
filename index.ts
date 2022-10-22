import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware";
import routes from "./routes/index.routes";
import { ConnectDB } from "./config/config";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

//connect DB
ConnectDB();

app.get("/v1/api", (req: Request, res: Response) => {
  res.send("BNEL API");
});

app.use("/v1/api", routes);

//error middleware
app.use(notFound, errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
