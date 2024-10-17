import { Controller, Get, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from 'src/access-console/guards/jwt-auth.guard';
import { Notifications } from './notifications.entity';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @Get()
    async getAllNotifications(): Promise<Notifications[]> {
      return this.notificationsService.getAllNotifications();
    }
}
