import { Controller } from '@nestjs/common';
import { HomesService } from './homes.service';

@Controller('homes')
export class HomesController {
  constructor(private homesService: HomesService) {}

  public async getHomes() {
    return await this.homesService.getHomes();
  }
}
