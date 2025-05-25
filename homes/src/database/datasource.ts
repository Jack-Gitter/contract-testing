import { Home } from '../homes/homes.entity';
import { DataSource } from 'typeorm';
import { Init1748110788902 } from './migrations/1748110788902-init';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'contract_testing',
  migrationsRun: true,
  entities: [Home],
  migrations: [Init1748110788902],
});
