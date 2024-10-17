import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notifications } from './notifications.entity';

@Injectable()
export class NotificationsService {
    constructor(
        @InjectRepository(Notifications)
        private readonly notificationsRepository: Repository<Notifications>,
    ) {}
    
    // ambil data notifikasi
    async getAllNotifications(): Promise<Notifications[]> {
        return await this.notificationsRepository.find();
      }
}
