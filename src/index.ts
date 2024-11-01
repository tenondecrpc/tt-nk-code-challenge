import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";

import taskRoutes from "./task/route";
import "dotenv/config";
import "reflect-metadata";
import { AppDataSource } from "./datasource";

const port = process.env.HOST_PORT || 3000;

const app: Express = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(taskRoutes);

AppDataSource.initialize()
  .then(() => {
    console.info("Data Source has been initialized!");
  })
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});