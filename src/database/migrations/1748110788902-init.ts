import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1748110788902 implements MigrationInterface {
    name = 'Init1748110788902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "home" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "zip" character varying NOT NULL, "price_per_night" integer NOT NULL, CONSTRAINT "PK_012205783b51369c326a1ad4a64" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "home"`);
    }

}
