import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('legal_doc_bo')
export class LegalDokumen {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true })
  bisnis_owner_id: number;

  @Column({ type: 'varchar', length: 255 })
  ktp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  akta: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  sk_kemenkumham: string;

  @Column({ type: 'varchar', length: 255 })
  npwp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nib: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  iso: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  // reason
  @Column({ type: 'text', nullable: true })
  reason: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @OneToOne(() => BisnisOwner, (bisnisOwner) => bisnisOwner.legalDokumen)
  @JoinColumn({ name: 'bisnis_owner_id' }) // Tambahkan ini untuk mendefinisikan kolom join
  bisnisOwner: BisnisOwner;
}
