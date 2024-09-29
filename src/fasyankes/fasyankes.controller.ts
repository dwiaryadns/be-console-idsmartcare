import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FasyankesService } from './fasyankes.service';
import { Fasyankes } from './fasyankes.entity';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';

@Controller('fasyankes')
export class FasyankesController {
  constructor(private readonly fasyankesService: FasyankesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllFasyankes(): Promise<Fasyankes[]> {
    return this.fasyankesService.findAll();
  }
}
