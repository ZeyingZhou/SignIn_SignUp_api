import { Request, Response} from "express";
import User from "../entity/User";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

const jwt = require("jsonwebstoken");
const bcrypt = require("bcryptjs");
class AuthController {
    static signInUser = async (req: Request, res: Response) => {
        try {
            const {
                email,
                password
            } = req.body;

            const user: User = await getRepository(User).createQueryBuilder('user').where('user.email  =: email', {email}).getOne();
            if(!user) {
                res.status(404).send({
                    message: "user not exist"
                })
            }

            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if(!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }


            const token = jwt.sign({ id: user.id },
                process.env.ACCESS_TOKEN_SECRET,
                {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });

            res.status(200).send({
                id: user.id,
                email: user.email,
                password: user.password,
                accessToken: token
            })
        } catch (e) {
            return res.send({
                message: e.message,
            })
        }
    }

    static signUpUser = async (req: Request, res: Response) => {
        try {
            const {
                email,
                password,
                firstName,
                lastName
            } = req.body;

            const user = User.create({
                email,
                password: bcrypt.hashSync(req.body.password, 8),
                firstName,
                lastName
            })

            const errors = await validate(user);

            if(errors.length > 0){
                return res.send({
                    message: errors
                })
            }

            await user.save()

            return res.send({
                user
            })
        } catch (e) {
            return res.send({
                message: e.message,
            })
        }
    }

    static checkAuth = async (req: Request, res: Response) => {
        return res.json("Authenticated");
    }
}

export default AuthController;