import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  // autoincrement
  id?: number;

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;
  @CreateDateColumn({ nullable: true })
  updatedAt?: Date;
}
