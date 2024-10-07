import { Exclude } from 'class-transformer';
import { join } from 'path';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
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
  @Exclude()
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

  @OneToOne(() => BoInfos, (boInfos) => boInfos.bisnisOwner)
  boInfos: BoInfos;

  @OneToOne(() => LegalDokumen, (legalDokumen) => legalDokumen.bisnisOwner)
  legalDokumen: LegalDokumen;
}
