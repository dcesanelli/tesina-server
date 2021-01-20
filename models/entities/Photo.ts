import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('int')
    userId!: number;

    @Column('varchar')
    name!: string;

    @Column('text')
    description!: string;
}