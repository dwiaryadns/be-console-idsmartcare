import { Fasyankes } from 'src/fasyankes/fasyankes.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity('access_fasyankes')
export class AccessFasyankes {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  fasyankes_id: string;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'int', width: 1, default: 1 })
  is_active: boolean;

  @Column({ type: 'varchar', length: 255 })
  created_by: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  id_profile: string;

  @Column({ type: 'varchar', length: 255, default: 'admin' })
  role: string;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  // Relasi dengan fasyankes
  @ManyToOne(() => Fasyankes, (fasyankes) => fasyankes.accessFasyankes)
  @JoinColumn({ name: 'fasyankes_id' })
  fasyankes: Fasyankes;
}
