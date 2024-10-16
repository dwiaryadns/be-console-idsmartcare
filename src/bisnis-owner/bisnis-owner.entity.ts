import { join } from 'path';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import { HistoryBoInfo } from 'src/history-bo-info/history-bo-info.entity';
import { HistoryLegalDoc } from 'src/history-legal-doc/history-legal-doc.entity';
import { LegalDokumen } from 'src/legal-dokumen/legal-dokumen.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('bisnis_owners')
export class BisnisOwner {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  email_verified_at?: Date;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'boolean', default: false })
  is_send_email: boolean;

  @Column({ type: 'boolean', default: false })
  is_resend: boolean;

  @Column({ type: 'boolean', default: false })
  is_first_login: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  img_profile?: string;

  @Column({ type: 'boolean', default: false })
  is_2fa: boolean;

  @Column({ type: 'varchar', length: 100, nullable: true })
  remember_token?: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  // Relasi dengan BoInfos
  @OneToOne(() => BoInfos, (boInfos) => boInfos.bisnisOwner)
  boInfos: BoInfos;

  // relasi dengan tabel legal
  @OneToOne(() => LegalDokumen, (legalDokumen) => legalDokumen.bisnisOwner)
  legalDokumen: LegalDokumen;

  // Relasi OneToMany dengan HistoryLegalDoc
  @OneToMany(
    () => HistoryLegalDoc,
    (historyLegalDoc) => historyLegalDoc.bisnisOwner,
  )
  historyLegalDocs: HistoryLegalDoc[];

  @OneToMany(() => HistoryBoInfo, (historyBoInfo) => historyBoInfo.bisnisOwner)
  historyBoInfos: HistoryBoInfo[];
}
