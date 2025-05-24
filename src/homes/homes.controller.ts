import { Controller, Get } from '@nestjs/common';
import { HomesService } from './homes.service';

@Controller('homes')
export class HomesController {
  constructor(private homesService: HomesService) {}

  @Get()
  public async getHomes() {
    return await this.homesService.getHomes();
  }
}
