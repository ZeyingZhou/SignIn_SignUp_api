import {Request, Response, NextFunction} from 'express';
import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';


const jwt = require("jsonwebstoken");

export interface CustomRequest extends Request {
    user: string | JwtPayload;
   }
export const verifytoken: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.header('Authorization')?.replace('Bearer ', '');

        if(!token) {
            throw new Error();
        }
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            console.log(err)
            if(err) return res.sendStatus(403);
            (req as CustomRequest).user = user;
            next();
        })
    } catch (err) {
        res.status(401).send('Please authenticate');
    }

}