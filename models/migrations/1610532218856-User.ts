import { MigrationInterface, QueryRunner } from "typeorm";

export class User1610532218856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE user (id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL, email VARCHAR(100) NOT NULL, firstname varchar(50) NOT NULL, lastname varchar(50) NOT NULL, password varchar(50) NOT NULL, CONSTRAINT UQ_user_email UNIQUE (email))`,
            undefined,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user`, undefined);
    }

}
