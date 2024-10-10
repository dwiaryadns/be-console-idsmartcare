import { Controller, Get, Query } from '@nestjs/common';
import { HistoryBoInfoService } from './history-bo-info.service';
@Controller('history-bo-info')
export class HistoryBoInfoController {
  constructor(private readonly historyBoInfoService: HistoryBoInfoService) {}
  @Get()
  async getAllHistoryBoInfo(
    @Query('start_date') start_date?: string,
    @Query('end_date') end_date?: string,
    @Query('search') search: string = '',
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
  ): Promise<any> {
    return this.historyBoInfoService.findHistoryBoInfo(
      start_date,
      end_date,
      search,
      Number(page),
      Number(limit),
    );
  }
}
