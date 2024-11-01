import { Request, Response } from 'express';

import { Task } from "./entity"
import { AppDataSource } from "../datasource"

async function retrieveAll(req: Request, res: Response): Promise<any> {
    const tasks = await AppDataSource.manager.find(Task);
    return res.json({ statusCode: 200, message: 'Retrieve all tasks successfully', tasks });
}

async function create(req: Request, res: Response): Promise<any> {
    const body = req.body || {};
    if (!body.title) {
        return res.status(400).json({ statusCode: 400, message: 'Title in the body is missing' });
    }
    const task = new Task();
    task.title = body.title;
    await AppDataSource.manager.save(task);

    return res.json({ statusCode: 200, message: 'Create a new task successfully', id: task.id });
}

async function update(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const body = req.body || {};
    const id: number = +params.id;
    const taskSaved = await AppDataSource.manager.findOneBy(Task, { id });
    if (!taskSaved) {
        return res.status(404).json({ statusCode: 404, message: 'Task not found' });
    }
    if (!body.title) {
        return res.status(400).json({ statusCode: 400, message: 'Title in the body is missing' });
    }
    const task = new Task();
    task.title = body.title;
    task.completed = body.completed;
    await AppDataSource.manager.update(Task, params.id, task);

    return res.json({ statusCode: 200, message: 'Update a task successfully', task: { ...task, completed: task.completed } });
}

async function remove(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const id: number = +params.id;
    const taskSaved = await AppDataSource.manager.findOneBy(Task, { id });
    if (!taskSaved) {
        return res.status(404).json({ statusCode: 404, message: 'Task not found' });
    }
    await AppDataSource.manager.delete(Task, params.id);

    return res.json({ statusCode: 200, message: 'Remove a task successfully', id: params.id });
}

export default {
    retrieveAll,
    create,
    update,
    remove
};