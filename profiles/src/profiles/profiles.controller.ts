import { Controller } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller()
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}
}
