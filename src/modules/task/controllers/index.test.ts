import { Request, Response } from 'express';

import taskController from './../controllers/index';
import { AppDataSource } from "../../../database";
import { Task } from "../entities";
import { httpCodes } from '../../../common/http-codes';

jest.mock('../../../database', () => ({
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
            expect(mockResponse.status).toHaveBeenCalledWith(httpCodes.OK);
        });
    });
});
