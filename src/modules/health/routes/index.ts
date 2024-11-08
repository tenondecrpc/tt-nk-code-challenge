
import express, { Router, Request, Response } from 'express';
import Health from '../controllers';

const router: Router = express.Router();

router.get('/health', (req: Request, res: Response) => Health.health(req, res));

export default router;