import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BisnisOwner } from './bisnis-owner/bisnis-owner.entity';
import { Fasyankes } from './fasyankes/fasyankes.entity';
import { BoInfos } from './bo-infos/bo-infos.entity';
import { LegalDokumen } from './legal-dokumen/legal-dokumen.entity';
import { AccessConsole } from './access-console/entities/access-console.entity';
import { AccessFasyankes } from './access_fasyankes/access_fasyankes.entity';
import { HistoryLegalDoc } from './history-legal-doc/history-legal-doc.entity';
import { HistoryBoInfo } from './history-bo-info/history-bo-info.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'bisnis-owner',
  // entities: ['dist/**/*.entity{.ts,.js}'],
  entities: [
    BisnisOwner,
    Fasyankes,
    BoInfos,
    LegalDokumen,
    AccessConsole,
    AccessFasyankes,
    HistoryLegalDoc,
    HistoryBoInfo,
  ],
  synchronize: false,
  logging: true,
  logger: 'advanced-console',
  // Log SQL queries executed by TypeORM
};
