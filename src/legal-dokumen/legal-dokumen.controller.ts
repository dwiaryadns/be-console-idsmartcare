import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { LegalDokumenService } from './legal-dokumen.service';
import { LegalDokumen } from './legal-dokumen.entity';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';

@Controller('legal-dokumen')
export class LegalDokumenController {
  constructor(private readonly legalDokumenService: LegalDokumenService) {}

  // get
  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<LegalDokumen[]> {
    return this.legalDokumenService.findAll();
  }

  // get id tabel
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: number): Promise<LegalDokumen> {
    return await this.legalDokumenService.findOne(id);
  }

  // update status
  @Put(':id/status')
  @UseGuards(JwtAuthGuard) // Melindungi endpoint dengan JWT Auth Guard
  async updateStatus(
    @Param('id') id: number,
    @Body('status') status: string,
    @Body('reason') reason?: string,
    @Body('petugas') petugas?: string, // Tambahkan parameter petugas
  ): Promise<{ legalDokumen: LegalDokumen }> {
    // Validasi alasan jika status adalah 'pending' atau 'rejected'
    if (['pending', 'rejected'].includes(status) && !reason) {
      throw new BadRequestException('Alasan wajib diisi.');
    }

    // Panggil service untuk memperbarui status
    return this.legalDokumenService.updateStatus(id, status, reason, petugas); // Tambahkan petugas
  }
}
