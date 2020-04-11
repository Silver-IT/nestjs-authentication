import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity('role')
export class Role {
    @PrimaryGeneratedColumn({ name: 'ID_Role'})
    public id: number;

    @Column()
    name: string;

    @OneToMany(() => User, user => user.role)
    users: User[];

    constructor(name: string) {
        this.name = name;
    }
}
