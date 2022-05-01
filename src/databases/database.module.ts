import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CantonsEntity } from '../cantons/entities/cantons.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'home',
      entities: [CantonsEntity],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
