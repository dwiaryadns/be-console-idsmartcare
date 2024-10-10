import { Body, Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { FasyankesService } from './fasyankes.service';
import { Fasyankes } from './fasyankes.entity';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';

@Controller('fasyankes')
export class FasyankesController {
  constructor(private readonly fasyankesService: FasyankesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllFasyankes(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search: string = '',
    @Query('is_active') is_active: boolean,
  ): Promise<any> {
    return this.fasyankesService.findAll(
      Number(page),
      Number(limit),
      search,
      is_active,
    );
  }
}
