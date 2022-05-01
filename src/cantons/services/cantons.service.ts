import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CantonsEntity } from '../entities/cantons.entity';
import { CantonsRepository } from '../repositories/cantons.repository';
@Injectable()
export class CantonesService {
  constructor(
    @InjectRepository(CantonsRepository)
    private cantonsRepository: CantonsRepository,
  ) {}
  async getAllCantons(): Promise<CantonsEntity[]> {
    //return await this.cantonsRepository.getAllCantons
    return await this.cantonsRepository.getAllCantonsQuery();
  }
}
