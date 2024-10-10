import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryBoInfo } from './history-bo-info.entity';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import { HistoryBoInfoController } from './history-bo-info.controller';
import { HistoryBoInfoService } from './history-bo-info.service';
@Module({
  imports: [TypeOrmModule.forFeature([HistoryBoInfo, BoInfos])],
  exports: [TypeOrmModule],
  controllers: [HistoryBoInfoController],
  providers: [HistoryBoInfoService],
})
export class HistoryBoInfoModule {}
