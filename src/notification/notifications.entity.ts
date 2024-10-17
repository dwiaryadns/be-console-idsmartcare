import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('notifications')
export class Notifications {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'bisnis_owner_id'})
    bisnisOwnerId: number;

    @Column()
    title: string;

    @Column()
    message: string;

    @Column()
    is_read: boolean;

    @Column()
    type: string;

    @Column()
    path: string;

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


}