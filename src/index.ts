import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import "reflect-metadata";

import taskRoutesV1 from "./modules/task/routes/v1";
import healthRoutes from "./modules/health/routes";
import { AppDataSource } from "./database";

const port = process.env.HOST_PORT || 3000;

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", taskRoutesV1);
app.use("/", healthRoutes);

AppDataSource.initialize()
  .then(() => {
    console.info("Data Source has been initialized!");
  })
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}/api/v1`);
});