import { Controller, Get, Query, Search, UseGuards } from '@nestjs/common';
import { HistoryLegalDocService } from './history-legal-doc.service';
import { HistoryLegalDoc } from './history-legal-doc.entity';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';
@Controller('history-legal-doc')
export class HistoryLegalDocController {
  constructor(
    private readonly historyLegalDocService: HistoryLegalDocService,
  ) {}
  // untuk filter
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllHistoryLegalDoc(
    @Query('start_date') start_date?: string,
    @Query('end_date') end_date?: string,
    @Query('search') search: string = '',
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
  ): Promise<any> {
    // Periksa apakah ada parameter tanggal, dan serahkan tugas pengambilan data ke service
    return this.historyLegalDocService.findHistoryLegalDoc(
      start_date,
      end_date,
      search,
      Number(page),
      Number(limit),
    );
  }
}
