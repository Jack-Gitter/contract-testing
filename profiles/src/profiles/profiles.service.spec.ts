import { Test } from '@nestjs/testing';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { exec } from 'node:child_process';
import { HttpModule, HttpService } from '@nestjs/axios';
import { BadRequestException } from '@nestjs/common';

describe(ProfilesService.name, () => {
  jest.setTimeout(60000);
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

    exec('npm run mock:up');
    await new Promise((resolve) => setTimeout(resolve, 5000));
  });

  afterAll(async () => {
    exec('npm run mock:down');
  });

  describe('Get Profile', () => {
    it('properly integrates with the homes service', async () => {
      const res = await profileService.getProfile(1);
      expect(res).not.toBeNull();
      expect(res.homes).not.toBeNull();
    });
    it('properly integrates with the homes service', async () => {
      const res = await profileService.findProfileHome(
        1,
        'random',
        'street',
        '12345',
      );

      expect(res.home).not.toBeNull();
      expect(res.name).not.toBeNull();
    });
  });
});
