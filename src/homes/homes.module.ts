import { Module } from '@nestjs/common';
import { HomesController } from './homes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './homes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [HomesController],
  providers: [HomesModule],
})
export class HomesModule {}
