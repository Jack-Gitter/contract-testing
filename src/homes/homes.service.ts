import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Home } from './homes.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HomesService {
  constructor(
    @InjectRepository(Home) private homesRepository: Repository<Home>,
  ) {}

  public async getHomes() {
    return await this.homesRepository.find();
  }

  public async findHome(street: string, zip: string, city: string) {
    const home = await this.homesRepository.findOneBy({
      street,
      city,
      zip,
    });
    if (home) {
      return home;
    } else {
      throw new NotFoundException('Home does not exist');
    }
  }
}
