import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('access_consoles')
export class AccessConsole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  fullname: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ length: 155 })
  role: string;
}
