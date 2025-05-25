import { Module } from '@nestjs/common';
import { HomesController } from './homes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './homes.entity';
import { HomesService } from './homes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [HomesController],
  providers: [HomesService],
})
export class HomesModule {}
