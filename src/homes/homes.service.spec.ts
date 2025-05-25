import { Test } from '@nestjs/testing';
import { HomesService } from './homes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './homes.entity';
import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { Init1748110788902 } from '../database/migrations/1748110788902-init';
import { runSeed } from '../database/seed';
import { DataSource } from 'typeorm';

describe(HomesService.name, () => {
  jest.setTimeout(60000);
  let homesService: HomesService;
  let container: StartedPostgreSqlContainer;

  beforeAll(async () => {
    container = await new PostgreSqlContainer()
      .withDatabase('contract_testing')
      .withUsername('postgres')
      .withPassword('postgres')
      .start();
  });

  afterAll(async () => {
    await container.stop();
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: container.getHost(),
          port: container.getPort(),
          username: container.getUsername(),
          password: container.getPassword(),
          database: container.getDatabase(),
          migrationsRun: true,
          entities: [Home],
          migrations: [Init1748110788902],
        }),
        TypeOrmModule.forFeature([Home]),
      ],
      controllers: [],
      providers: [HomesService],
    }).compile();

    const datasource = moduleRef.get(DataSource);
    await runSeed(datasource);

    homesService = moduleRef.get(HomesService);
  });

  describe('Get Homes', () => {
    it('Fetches homes properly', async () => {
      const homes = await homesService.getHomes();
      expect(homes).toBe(undefined);
    });
  });
});
