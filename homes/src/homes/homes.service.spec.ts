import { Test } from '@nestjs/testing';
import { HomesService } from './homes.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './homes.entity';
import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { Init1748110788902 } from '../database/migrations/1748110788902-init';
import { DataSource, Repository } from 'typeorm';
import { runSeed } from '../database/seed';
import { dataSource } from '../database/datasource';

describe(HomesService.name, () => {
  jest.setTimeout(60000);
  let homesService: HomesService;
  let container: StartedPostgreSqlContainer;
  let homeRepo: Repository<Home>;
  let datasource: DataSource;

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

    homesService = moduleRef.get(HomesService);
    homeRepo = moduleRef.get(getRepositoryToken(Home));
    datasource = moduleRef.get(DataSource);
  });

  afterEach(async () => {
    await homeRepo.deleteAll();
  });

  describe('Get Homes', () => {
    it('properly fetches a lot of homes', async () => {
      await runSeed(datasource);
      const homes = await homesService.getHomes();
      expect(homes).toHaveLength(20);
    });
    it('Fetches homes properly', async () => {
      const home = new Home('Street', 'City', 'Zip', 123);
      await homeRepo.save([home]);
      const homes = await homesService.getHomes();
      expect(homes).toMatchObject([home.toJson()]);
    });
    it('Recieves empty array back when no data in database', async () => {
      const homes = await homesService.getHomes();
      expect(homes).toMatchObject([]);
    });
  });
});
