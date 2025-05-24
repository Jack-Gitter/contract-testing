import { Module } from '@nestjs/common';
import { HomesModule } from './homes/homes.module';

@Module({
  imports: [HomesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
