import express, { Router, Request, Response } from 'express';
import { checkSchema } from 'express-validator';

import Task from '../../controllers';
import { taskCreateSchema, taskUpdateSchema } from '../../validators/request';

const router: Router = express.Router();

router.get("/tasks", (req: Request, res: Response) => Task.retrieveAll(req, res));
router.post("/task", checkSchema(taskCreateSchema), (req: Request, res: Response) => Task.create(req, res));
router.put("/task/:id", checkSchema(taskUpdateSchema), (req: Request, res: Response) => Task.update(req, res));
router.delete("/task/:id", (req: Request, res: Response) => Task.remove(req, res));

export default router;