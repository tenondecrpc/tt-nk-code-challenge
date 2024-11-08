
import { Request, Response } from 'express';
import { httpCodes } from '../../../common/http-codes';

async function health(req: Request, res: Response): Promise<any> {
    return res.status(httpCodes.OK).send({ message: 'Retrieve health status successfully' });
}

export default {
    health,
};