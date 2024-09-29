import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FasyankesController } from './fasyankes.controller';
import { FasyankesService } from './fasyankes.service';
import { Fasyankes } from './fasyankes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fasyankes])],
  exports: [TypeOrmModule],
  controllers: [FasyankesController],
  providers: [FasyankesService],
})
export class FasyankesModule {}
