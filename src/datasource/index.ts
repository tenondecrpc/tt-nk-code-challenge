import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "../task/entity"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db/task.sqlite",
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: [],
    subscribers: [],
});