import { Module } from '@nestjs/common';
import { HomesModule } from './homes/homes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: [],
      migrations: ['dist/migrations/*.ts'],
    }),
    HomesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
