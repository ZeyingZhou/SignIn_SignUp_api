import {Router} from 'express';
import AuthController from '../controller/AuthController';
import { checkDuplicateUsernameOrEmail } from '../middleware/verifySignUp';
import { verifytoken } from '../middleware/jwt';

const authRoute = Router();

authRoute.post('/signup',checkDuplicateUsernameOrEmail,AuthController.signUpUser);
authRoute.post('/signin',AuthController.signInUser);
authRoute.get('/checkAuth', verifytoken, AuthController.checkAuth)

export default authRoute;