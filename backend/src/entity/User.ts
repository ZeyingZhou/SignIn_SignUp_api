import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

import BaseClass from "./BaseClass";
import { IsEmail, MinLength } from "class-validator";

@Entity('user')
class User extends BaseClass {
    @Column({
        unique: true
    })
    @IsEmail()
    email: string

    @Column()
    @MinLength(8)
    password: string

    @Column()
    @MinLength(1)
    firstName: string

    @Column()
    @MinLength(1)
    lastName: string

    @Column()
    active: boolean

}

export default User;