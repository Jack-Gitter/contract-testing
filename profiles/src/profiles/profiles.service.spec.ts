import { Test } from '@nestjs/testing';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { execSync } from 'node:child_process';
import { HttpModule, HttpService } from '@nestjs/axios';

describe(ProfilesService.name, () => {
  let profileService: ProfilesService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ProfilesController],
      providers: [
        {
          provide: ProfilesService,
          useFactory: (httpService: HttpService) => {
            return new ProfilesService(httpService, 'http://localhost:4010');
          },
          inject: [HttpService],
        },
      ],
    }).compile();

    profileService = moduleRef.get(ProfilesService);

    execSync('npm run mock up');
  });

  afterAll(async () => {
    execSync('npm run mock down');
  });

  describe('Get Profile', () => {
    it('properly integrates with the homes service', async () => {
      const res = await profileService.getProfile(1);
      expect(res).not.toBeNull();
    });
  });
});
