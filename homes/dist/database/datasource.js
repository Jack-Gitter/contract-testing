"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const homes_entity_1 = require("../homes/homes.entity");
const typeorm_1 = require("typeorm");
const _1748110788902_init_1 = require("./migrations/1748110788902-init");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'contract_testing',
    migrationsRun: true,
    entities: [homes_entity_1.Home],
    migrations: [_1748110788902_init_1.Init1748110788902],
});
//# sourceMappingURL=datasource.js.map