import express, { Router, Request, Response } from 'express';
import { checkSchema } from 'express-validator';

import Task from '../../controllers/index';
import { taskCreateSchema, taskUpdateSchema } from '../../validators/request';

const routes: Router = express.Router();

routes.get("/tasks", (req: Request, res: Response) => Task.retrieveAll(req, res));
routes.post("/task", checkSchema(taskCreateSchema), (req: Request, res: Response) => Task.create(req, res));
routes.put("/task/:id", checkSchema(taskUpdateSchema), (req: Request, res: Response) => Task.update(req, res));
routes.delete("/task/:id", (req: Request, res: Response) => Task.remove(req, res));

export default routes;