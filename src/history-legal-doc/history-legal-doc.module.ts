import { Module } from '@nestjs/common';
import { HistoryLegalDocService } from './history-legal-doc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryLegalDoc } from './history-legal-doc.entity';
import { HistoryLegalDocController } from './history-legal-doc.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryLegalDoc])],
  exports: [TypeOrmModule],
  controllers: [HistoryLegalDocController], // Export the service to be used in other modules
  providers: [HistoryLegalDocService],
})
export class HistoryLegalDocModule {}
