import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar')
    email!: string;

    @Column('varchar')
    firstName!: string;

    @Column('varchar')
    lastName!: string;

    @Column('varchar')
    password!: string;
}