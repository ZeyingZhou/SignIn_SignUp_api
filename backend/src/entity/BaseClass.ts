import {BaseEntity, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


class BaseClass extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({
        nullable: false,
        default: true
    })
    isActive: boolean

    @Column({
        nullable: false,
        default: false
    })
    isDelete: boolean
}

export default BaseClass
