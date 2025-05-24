import { Home } from '../homes/homes.entity';
import { DataSource } from 'typeorm';

export const datasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'contract_testing',
  migrationsRun: true,
  entities: [Home],
  migrations: [],
});
