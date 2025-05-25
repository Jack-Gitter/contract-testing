import { Test } from '@nestjs/testing';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { execSync } from 'node:child_process';

describe(ProfilesService.name, () => {
  let profileService: ProfilesService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [ProfilesController],
      providers: [ProfilesService],
    }).compile();

    profileService = moduleRef.get(ProfilesService);

    execSync('npm run mock');
  });

  afterAll(async () => {
      execSync('')
  });

  beforeEach(async () => {}).compile();

  afterEach(async () => {});

  describe('Get Profile', () => {});
});
