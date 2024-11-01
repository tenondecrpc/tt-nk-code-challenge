import { Request, Response } from 'express';
import { Task } from "./entity"
import { AppDataSource } from "../datasource"

async function retrieveAll(req: Request, res: Response): Promise<any> {
    const tasks = await AppDataSource.manager.find(Task);
    return res.json({statusCode: 200, message: 'Retrieve all tasks successfully', tasks });
}

async function create(req: Request, res: Response): Promise<any> {
    const body = req.body;
    const task = new Task();
    task.title = body.title;
    await AppDataSource.manager.save(task);

    return res.json({statusCode: 200, message: 'Create a new task successfully', id: task.id });
}

async function update(req: Request, res: Response): Promise<any> {
    const params = req.params;
    const body = req.body;
    const task = new Task();
    task.title = body.title;
    task.completed = body.completed;
    await AppDataSource.manager.update(Task, params.id, task);
    return res.json({statusCode: 200, message: 'Update an existing task successfully', task: task });
}

async function remove(req: Request, res: Response): Promise<any> {
    const params = req.params;
    await AppDataSource.manager.delete(Task, params.id);
    return res.json({statusCode: 200, message: 'Remove a task successfully', id: params.id });
}

export default {
    retrieveAll,
    create,
    update,
    remove
};