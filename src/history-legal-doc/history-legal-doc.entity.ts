import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('history_legal_doc')
export class HistoryLegalDoc {
  @PrimaryColumn()
  id: number;
  @Column()
  legal_doc_bo_id: number; // Pastikan kolom ini sesuai dengan kolom yang ada di tabel
  @Column({ type: 'varchar', length: 155 })
  status: string;
  @Column({ type: 'varchar', length: 255 })
  petugas: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  // Relasi ManyToOne dengan BoInfos
  @ManyToOne(() => BoInfos, (boInfos) => boInfos.historyLegalDocs)
  @JoinColumn({ name: 'legal_doc_bo_id' }) // Pastikan kolom join sesuai
  boInfo: BoInfos;
  // relasi dengan bisnis owner
  @ManyToOne(() => BisnisOwner, (bisnisOwner) => bisnisOwner.historyLegalDocs)
  bisnisOwner: BisnisOwner;
}
