import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { BoInfosService } from './bo-infos.service';
import { BoInfos } from './bo-infos.entity';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';

@Controller('bo-infos')
export class BoInfosController {
  constructor(private readonly boInfosService: BoInfosService) {}

  // get all data
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<BoInfos[]> {
    return this.boInfosService.findAll();
  }

  // get id tabel bo-info
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: number): Promise<BoInfos> {
    return this.boInfosService.findOne(id);
  }

  // update status
  @Put(':id/status')
  @UseGuards(JwtAuthGuard)
  async updateStatus(
    @Param('id') id: number,
    @Body('status') status: string,
    @Body('reason') reason?: string, // Reason bersifat opsional
    @Body('petugas') petugas?: string, // Petugas bersifat opsional
  ): Promise<{ boInfo: BoInfos }> {
    // Validasi untuk status "Pending" atau "Reject"
    if (['pending', 'rejected'].includes(status) && !reason) {
      throw new BadRequestException('Alasan wajib diisi.');
    }

    // Panggil service untuk update status dan reason
    return this.boInfosService.updateStatus(id, status, reason, petugas);
  }
}
