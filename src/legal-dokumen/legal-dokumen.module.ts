import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegalDokumenService } from './legal-dokumen.service';
import { LegalDokumenController } from './legal-dokumen.controller';
import { LegalDokumen } from './legal-dokumen.entity';
import { HistoryLegalDoc } from 'src/history-legal-doc/history-legal-doc.entity';
import { Notifications } from 'src/notification/notifications.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LegalDokumen, HistoryLegalDoc, Notifications]),
  ],
  exports: [TypeOrmModule],
  controllers: [LegalDokumenController],
  providers: [LegalDokumenService],
})
export class LegalDokumenModule {}
