import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    email: string;

    @Column("varchar")
    password: string;

    @Column("date")
    date_birth: Date;

    @Column("tinyint")
    gender: number;

    @Column("text")
    avatar_url: string;

    @Column("timestamp")
    created_at: Date;

    @Column("timestamp")
    updated_at: Date;

    @Column("timestamp")
    deleted_at: Date;
}