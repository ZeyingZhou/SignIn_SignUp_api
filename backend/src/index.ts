import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {User} from "./entity/User";
import authRoute from "./routes/authRoute";
import userRoute from "./routes/userRoutes";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use('/user', userRoute);
    app.use('/auth', authRoute);

    app.listen(3000);

}).catch(error => console.log(error));
