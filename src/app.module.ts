import { Module } from '@nestjs/common';
import { HomesModule } from './homes/homes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Init1748110788902 } from './database/migrations/1748110788902-init';
import { Home } from './homes/homes.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'contract_testing',
      migrationsRun: true,
      entities: [Home],
      migrations: [Init1748110788902],
    }),
    HomesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
