import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { httpCodes } from '../../../common/http-codes';

import { Task } from "../entities"
import { AppDataSource } from "../../../database"

async function retrieveAll(req: Request, res: Response): Promise<any> {
    const tasks = await AppDataSource.manager.find(Task);
    return res.status(httpCodes.OK).send({ message: 'Retrieve all tasks successfully', tasks });
}

async function create(req: Request, res: Response): Promise<any> {
    const checkRequest = validationResult(req);
    if (!checkRequest.isEmpty()) {
        return res.status(httpCodes.BAD_REQUEST).send({ message: "Errors were found with the request data", errors: checkRequest.array()});
    }
    const body = req.body || {};
    const task = new Task();
    task.title = body.title;
    await AppDataSource.manager.save(task);

    return res.status(httpCodes.CREATED).send({ message: 'Create a new task successfully', id: task.id });
}

async function update(req: Request, res: Response): Promise<any> {
    const checkRequest = validationResult(req);
    if (!checkRequest.isEmpty()) {
        return res.status(httpCodes.BAD_REQUEST).send({ message: "Errors were found with the request data", errors: checkRequest.array()});
    }
    const params = req.params;
    const body = req.body || {};
    const id: number = +params.id;
    const taskSaved = await AppDataSource.manager.findOneBy(Task, { id });
    if (!taskSaved) {
        return res.status(httpCodes.NOT_FOUND).send({ message: 'Task not found' });
    }
    const task = new Task();
    task.title = body.title;
    task.completed = body.completed;
    await AppDataSource.manager.update(Task, params.id, task);

    return res.status(httpCodes.OK).send({ message: 'Update a task successfully', task: { ...task, completed: task.completed } });
}

async function remove(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const id: number = +params.id;
    const taskSaved = await AppDataSource.manager.findOneBy(Task, { id });
    if (!taskSaved) {
        return res.status(httpCodes.NOT_FOUND).send({ message: 'Task not found' });
    }
    await AppDataSource.manager.delete(Task, params.id);

    return res.status(httpCodes.OK).send({ message: 'Remove a task successfully', id: params.id });
}

export default {
    retrieveAll,
    create,
    update,
    remove
};