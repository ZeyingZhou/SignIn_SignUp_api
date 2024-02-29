import {Request, Response, NextFunction} from 'express';
import { RequestHandler } from 'express';

export const checkDuplicateUsernameOrEmail: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    
}