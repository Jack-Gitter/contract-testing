import { Controller, Get, Param } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profile')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get('/:id')
  public async getProfile(@Param('id') id: number) {
    return await this.profileService.getProfile(id);
  }
}
