import express, { Router, Request, Response } from 'express';
import Task from '../../index';

const routes: Router = express.Router();

routes.get("/tasks", (req: Request, res: Response) => Task.retrieveAll(req, res));
routes.post("/task", (req: Request, res: Response) => Task.create(req, res));
routes.put("/task/:id", (req: Request, res: Response) => Task.update(req, res));
routes.delete("/task/:id", (req: Request, res: Response) => Task.remove(req, res));

export default routes;