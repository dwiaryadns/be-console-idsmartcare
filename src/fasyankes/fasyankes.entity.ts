import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('fasyankes')
export class Fasyankes {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  fasyankesId: string;

  @Column({ type: 'bigint', unsigned: true })
  warehouse_id: number;

  @Column({ type: 'bigint', unsigned: true })
  bisnis_owner_id: number;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column('text')
  address: string;

  @Column({ type: 'varchar', length: 255 })
  pic: string;

  @Column({ type: 'varchar', length: 255 })
  pic_number: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  latitude: string;

  @Column({ type: 'varchar', length: 255 })
  longitude: string;

  @Column({ type: 'int', default: 1 })
  is_active: boolean;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
