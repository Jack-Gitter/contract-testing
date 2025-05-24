import { Module } from '@nestjs/common';
import { HomesModule } from './homes/homes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Calvinbean1!',
      database: 'contract_testing',
      migrationsRun: true,
      entities: [],
    }),
    HomesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
