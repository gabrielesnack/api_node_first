import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail} from "class-validator";

@Entity()
export class User {
    constructor (params?: { name: string, email: string, password: string }) {
        if(params != null) {
            this.name = params.name;
            this.email = params.email;   
            this.password = params.password
        }
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @IsEmail()
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