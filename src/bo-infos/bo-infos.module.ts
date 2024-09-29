import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoInfosController } from './bo-infos.controller';
import { BoInfosService } from './bo-infos.service';
import { BoInfos } from './bo-infos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoInfos])],
  exports: [TypeOrmModule],
  controllers: [BoInfosController],
  providers: [BoInfosService],
})
export class BoInfosModule {}
