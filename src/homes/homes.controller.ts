import { Controller, Get, Param, Post } from '@nestjs/common';
import { HomesService } from './homes.service';
import { FindHomeDTO, ReserveHomeDTO } from './homes.dto';

@Controller('homes')
export class HomesController {
  constructor(private homesService: HomesService) {}

  @Get()
  public async getHomes() {
    return await this.homesService.getHomes();
  }

  @Get('/:city/:street/:zip')
  public async findHome(@Param() findHomeDto: FindHomeDTO) {
    return await this.homesService.findHome(
      findHomeDto.city,
      findHomeDto.street,
      findHomeDto.zip,
    );
  }

  @Post('reserve')
  public async reserveHome(@Param() reserveHomeDto: ReserveHomeDTO) {
    return await this.homesService.reserveHome(
      reserveHomeDto.city,
      reserveHomeDto.street,
      reserveHomeDto.zip,
    );
  }
}
