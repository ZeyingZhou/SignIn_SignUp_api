import { Request, Response} from "express";
import User from "../entity/User";
import { getRepository } from "typeorm";

class AuthController {
    static signInUser = async (req: Request, res: Response) => {

    }

    static signUpUser = async (req: Request, res: Response) => {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const user: User = await getRepository(User).createQueryBuilder('user').where('user.email = :email', {email}).getOne();

        if(user) {
            return res.send({
                message: `user exist!`
            })
        }
    }
}

export default AuthController;