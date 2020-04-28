import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class User1588035494946 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    generationStrategy: "increment",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "date_birth",
                    type: "date",
                },
                {
                    name: "gender",
                    type: "tinyint",
                },
                {
                    name: "avatar_url",
                    type: "text",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("user");
    }

}
