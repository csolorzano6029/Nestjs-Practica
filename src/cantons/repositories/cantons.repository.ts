import { HttpException, HttpStatus } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CantonsEntity } from '../entities/cantons.entity';

@EntityRepository(CantonsEntity)
export class CantonsRepository extends Repository<CantonsEntity> {
  //TypeORM
  public async getAllCantons(): Promise<CantonsEntity[]> {
    try {
      return await this.find();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  //QueryBuilder
  public async getAllCantonsQuery(): Promise<CantonsEntity[]> {
    try {
      return await this.createQueryBuilder('cantons')
        .orderBy('cantons.nombre', 'ASC')
        .getMany();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
