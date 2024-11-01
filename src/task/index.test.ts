import { Request, Response } from 'express';
import taskController from './index';
import { AppDataSource } from "../datasource";
import { Task } from "./entity";

jest.mock('../datasource', () => ({
    AppDataSource: {
        manager: {
            find: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findOneBy: jest.fn(),
        },
    },
}));

describe('Task Controller', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let responseObject: any;

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            json: jest.fn().mockImplementation(result => {
                responseObject = result;
                return mockResponse;
            }),
            status: jest.fn().mockReturnThis(),
        };
    });

    describe('retrieveAll', () => {
        it('should retrieve all tasks successfully', async () => {
            const mockTasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
            (AppDataSource.manager.find as jest.Mock).mockResolvedValue(mockTasks);

            await taskController.retrieveAll(mockRequest as Request, mockResponse as Response);

            expect(AppDataSource.manager.find).toHaveBeenCalledWith(Task);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                message: 'Retrieve all tasks successfully',
                tasks: mockTasks
            });
        });
    });

    describe('create', () => {
        it('should create a new task successfully', async () => {
            mockRequest.body = { title: 'New Task' };
            const mockTask = { id: 1, title: 'New Task' };
            (AppDataSource.manager.save as jest.Mock).mockResolvedValue(mockTask);

            await taskController.create(mockRequest as Request, mockResponse as Response);

            expect(AppDataSource.manager.save).toHaveBeenCalledWith(expect.any(Task));
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                message: 'Create a new task successfully'
            });
        });

        it('should return 400 if title is missing', async () => {
            mockRequest.body = {};

            await taskController.create(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 400,
                message: 'Title in the body is missing'
            });
        });
    });

    describe('update', () => {
        it('should update a task successfully', async () => {
            mockRequest.params = { id: '1' };
            mockRequest.body = { title: 'Updated Task' };
            const mockTask = { id: 1, title: 'Updated Task' };
            (AppDataSource.manager.findOneBy as jest.Mock).mockResolvedValue(mockTask);
            (AppDataSource.manager.update as jest.Mock).mockResolvedValue(mockTask);

            await taskController.update(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                message: 'Update a task successfully',
                task: {
                    completed: undefined,
                    title: "Updated Task",
                },
            });
        });

        it('should return 400 if title is missing', async () => {
            mockRequest.body = {};

            await taskController.create(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 400,
                message: 'Title in the body is missing'
            });
        });
    });

    // Add more test cases for  remove functions
    describe('remove', () => {
        it('should remove a task successfully', async () => {
            mockRequest.params = { id: '1' };
            const mockTask = { id: 1, title: 'Updated Task' };
            (AppDataSource.manager.findOneBy as jest.Mock).mockResolvedValue(mockTask);
            (AppDataSource.manager.delete as jest.Mock).mockResolvedValue({ affected: 1 });

            await taskController.remove(mockRequest as Request, mockResponse as Response);

            expect(AppDataSource.manager.delete).toHaveBeenCalledWith(Task, '1');
            expect(mockResponse.json).toHaveBeenCalledWith({
                statusCode: 200,
                message: 'Remove a task successfully',
                id: '1'
            });
        });
    });
});
