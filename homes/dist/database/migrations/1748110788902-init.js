"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1748110788902 = void 0;
class Init1748110788902 {
    constructor() {
        this.name = 'Init1748110788902';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "home" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "zip" character varying NOT NULL, "price_per_night" integer NOT NULL, CONSTRAINT "PK_012205783b51369c326a1ad4a64" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "home"`);
    }
}
exports.Init1748110788902 = Init1748110788902;
//# sourceMappingURL=1748110788902-init.js.map