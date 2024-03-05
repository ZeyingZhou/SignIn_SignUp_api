import {Request, Response, NextFunction} from 'express';
import { RequestHandler } from 'express';
import { getRepository } from "typeorm";
import User from '../entity/User';

export const checkDuplicateUsernameOrEmail: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    const user: User = await getRepository(User).createQueryBuilder('user').where('user.email = :email', {email}).getOne();

    if(user) {
        return res.status(400).send({
            message: `user exist!`
        })
    }
    else {
        next();
    }
}