import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import { LegalDokumen } from 'src/legal-dokumen/legal-dokumen.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn, // Ganti import ini
  UpdateDateColumn,
} from 'typeorm';

@Entity('history_legal_doc')
export class HistoryLegalDoc {
  @PrimaryGeneratedColumn() // Ganti menjadi PrimaryGeneratedColumn
  id: number;

  @Column({ name: 'legal_doc_bo_id' }) // Pastikan nama ini sesuai
  legalDocBoId: number; // Pastikan kolom ini sesuai dengan kolom yang ada di tabel

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
  @JoinColumn({ name: 'legal_doc_bo_id' }) // Pastikan kolom join sesuai
  bisnisOwner: BisnisOwner;

  @ManyToOne(
    () => LegalDokumen,
    (legalDokumen) => legalDokumen.historyLegalDocs,
  )
  @JoinColumn({ name: 'legal_doc_bo_id' }) // Pastikan kolom join sesuai
  legalDokumen: LegalDokumen;
}
