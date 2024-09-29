import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegalDokumenService } from './legal-dokumen.service';
import { LegalDokumenController } from './legal-dokumen.controller';
import { LegalDokumen } from './legal-dokumen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LegalDokumen])],
  exports: [TypeOrmModule],
  controllers: [LegalDokumenController],
  providers: [LegalDokumenService],
})
export class LegalDokumenModule {}
