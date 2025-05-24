import { Injectable } from '@nestjs/common';
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
}
