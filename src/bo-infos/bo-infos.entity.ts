import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
import { HistoryBoInfo } from 'src/history-bo-info/history-bo-info.entity';
import { HistoryLegalDoc } from 'src/history-legal-doc/history-legal-doc.entity';
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

@Entity('bo_infos')
export class BoInfos {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true })
  bisnis_owner_id: number;

  @Column({ type: 'varchar', length: 255 })
  businessId: string;

  @Column({ type: 'varchar', length: 255 })
  businessType: string;

  @Column({ type: 'varchar', length: 255 })
  businessName: string;

  @Column({ type: 'varchar', length: 255 })
  businessEmail: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  mobile: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 255 })
  province: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  subdistrict: string;

  @Column({ type: 'varchar', length: 255 })
  village: string;

  @Column({ type: 'varchar', length: 255 })
  postal_code: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  // untuk reason
  @Column({ type: 'text', nullable: true })
  reason: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @OneToMany(() => HistoryBoInfo, (historyBoInfo) => historyBoInfo.boInfo)
  historyBoInfos: HistoryBoInfo[];
  // Relasi dengan bisnis_owner
  @OneToOne(() => BisnisOwner, (bisnisOwner) => bisnisOwner.boInfos)
  @JoinColumn({ name: 'bisnis_owner_id' }) // Tambahkan ini untuk mendefinisikan kolom join
  bisnisOwner: BisnisOwner;
  @OneToMany(() => HistoryLegalDoc, (historyLegalDoc) => historyLegalDoc.boInfo)
  historyLegalDocs: HistoryLegalDoc[];
}
