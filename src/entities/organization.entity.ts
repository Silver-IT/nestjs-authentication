import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity('organization')
export class Organization {
    @PrimaryGeneratedColumn({ name: 'ID_Organization'})
    public id: number;

    @Column()
    name: string;

    @OneToMany(() => User, user => user.role)
    users: User[];

    constructor(name: string) {
        this.name = name;
    }
}