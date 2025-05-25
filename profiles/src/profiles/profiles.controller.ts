import { Controller, Get, Param } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfileHomeDto } from './profiles.dto';

@Controller('profile')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get('/:id')
  public async getProfile(@Param('id') id: number) {
    return await this.profileService.getProfile(id);
  }

  @Get('/:id/:city/:street/:zip')
  public async findProfileHome(@Param() param: ProfileHomeDto) {
    return await this.profileService.findProfileHome(
      param.id,
      param.city,
      param.street,
      param.zip,
    );
  }
}
