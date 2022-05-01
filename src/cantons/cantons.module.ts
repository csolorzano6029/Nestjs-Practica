import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CantonesService } from './services/cantons.service';
import { CantonsRepository } from './repositories/cantons.repository';
import { CantonsEntity } from './entities/cantons.entity';
import { CantonsController } from './controllers/cantons.controller';
@Module({
  imports: [TypeOrmModule.forFeature([CantonsEntity, CantonsRepository])],
  providers: [CantonesService],
  controllers: [CantonsController],
})
export class CantonsModule {}
