import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { BisnisOwnerModule } from './bisnis-owner/bisnis-owner.module';
import { FasyankesModule } from './fasyankes/fasyankes.module';
import { BoInfosModule } from './bo-infos/bo-infos.module';
import { LegalDokumenModule } from './legal-dokumen/legal-dokumen.module';
import { AuthModule } from './access-console/auth/auth.module';
import { AccessFasyankesModule } from './access_fasyankes/access_fasyankes.module';
import { HistoryBoInfoModule } from './history-bo-info/history-bo-info.module';
import { HistoryLegalDocService } from './history-legal-doc/history-legal-doc.service';
import { HistoryLegalDocModule } from './history-legal-doc/history-legal-doc.module';
import { HistoryLegalDocController } from './history-legal-doc/history-legal-doc.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    BisnisOwnerModule,
    FasyankesModule,
    BoInfosModule,
    LegalDokumenModule,
    AuthModule,
    AccessFasyankesModule,
    HistoryBoInfoModule,
    HistoryLegalDocModule,
  ],
  controllers: [AppController, HistoryLegalDocController],
  providers: [AppService, HistoryLegalDocService],
})
export class AppModule {}
