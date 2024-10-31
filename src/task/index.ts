import { Request, Response } from 'express';
// import Task from './model';

async function retrieveAll(req: Request, res: Response): Promise<any> {
    return res.json({message: 'Retrieve all tasks successfully'});
}

async function create(req: Request, res: Response): Promise<any> {
    return res.json({message: 'Create a new task successfully'});
}

async function update(req: Request, res: Response): Promise<any> {
    return res.json({message: 'Update an existing task successfully'});
}

async function remove(req: Request, res: Response): Promise<any> {
    return res.json({message: 'Remove a task successfully'});
}

export default {
    retrieveAll,
    create,
    update,
    remove
};