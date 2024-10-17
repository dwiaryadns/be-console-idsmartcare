import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';

@Entity('history_bo_info')
export class HistoryBoInfo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'bo_info_id', type: 'bigint' })
  boInfoId: number;

  @Column({ type: 'varchar', length: 155 })
  status: string;

  @Column({ type: 'varchar', length: 255 })
  petugas: string;

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

  // Relasi ke BoInfos
  @ManyToOne(() => BoInfos, (boInfo) => boInfo.historyBoInfos)
  @JoinColumn({ name: 'bo_info_id' })
  boInfo: BoInfos;

  // Relasi ke BisnisOwner
  // @Column({ name: 'bisnis_owner_id', type: 'bigint', nullable: true })
  // bisnisOwnerId: number;

  @ManyToOne(() => BisnisOwner, (bisnisOwner) => bisnisOwner.historyBoInfos, {
    nullable: true,
  })
  @JoinColumn({ name: 'bo_info_id' })
  bisnisOwner: BisnisOwner;
}
