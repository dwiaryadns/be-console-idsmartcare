import { Module } from '@nestjs/common';
import { AccessFasyankesService } from './access_fasyankes.service';
import { AccessFasyankesController } from './access_fasyankes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessFasyankes } from './access_fasyankes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessFasyankes])],
  exports: [TypeOrmModule], // Export the service to be used in other modules
  providers: [AccessFasyankesService],
  controllers: [AccessFasyankesController],
})
export class AccessFasyankesModule {}
