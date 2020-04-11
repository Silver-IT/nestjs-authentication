import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user.entity";

@Entity('event')
export class UserEvent {
    @Column({ name: 'ID_Event'})
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    population: string;

    @Column({ type: Date })
    dateInit: Date;

    @Column({ type: Date })
    dateEnd: Date;

    @ManyToMany(() => User, user => user.events)
    @JoinTable()
    users: User[];
}
