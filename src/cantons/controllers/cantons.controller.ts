import { Controller, Get, Query } from '@nestjs/common';

import { CantonesService } from '../services/cantons.service';
@Controller('/v1/cantons')
export class CantonsController {
  constructor(private cantonService: CantonesService) {}

  @Get()
  async portfolioFactoryFile() {
    return await this.cantonService.getAllCantons();
  }
}
