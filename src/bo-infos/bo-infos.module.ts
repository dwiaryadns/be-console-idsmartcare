import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoInfosController } from './bo-infos.controller';
import { BoInfosService } from './bo-infos.service';
import { BoInfos } from './bo-infos.entity';
import { HistoryBoInfo } from 'src/history-bo-info/history-bo-info.entity';
import { Notifications } from 'src/notification/notifications.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoInfos, HistoryBoInfo, Notifications])],
  exports: [TypeOrmModule],
  controllers: [BoInfosController],
  providers: [BoInfosService],
})
export class BoInfosModule {}
