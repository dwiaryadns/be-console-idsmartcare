import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccessFasyankesService } from './access_fasyankes.service';
import { AccessFasyankes } from './access_fasyankes.entity';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';

@Controller('access-fasyankes')
export class AccessFasyankesController {
  constructor(
    private readonly accessFasyankesService: AccessFasyankesService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<AccessFasyankes[]> {
    return this.accessFasyankesService.findAll();
  }
}