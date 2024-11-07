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
            send: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis(),
        };
    });

    describe('retrieveAll', () => {
        it('should retrieve all tasks successfully', async () => {
            const mockTasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
            (AppDataSource.manager.find as jest.Mock).mockResolvedValue(mockTasks);

            await taskController.retrieveAll(mockRequest as Request, mockResponse as Response);

            expect(AppDataSource.manager.find).toHaveBeenCalledWith(Task);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
        });
    });
});
