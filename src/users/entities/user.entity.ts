import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 50, unique: true })
    email: string;

    @Column('varchar', { length: 20 })
    name: string;

    @Column('varchar', { length: 20, unique: true })
    username: string;

    @Column('varchar', { length: 100 })
    password: string;
}
