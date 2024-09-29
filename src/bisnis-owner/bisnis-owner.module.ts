import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BisnisOwner } from './bisnis-owner.entity';
import { BisnisOwnerService } from './bisnis-owner.service';
import { BisnisOwnerController } from './bisnis-owner.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BisnisOwner])],
  providers: [BisnisOwnerService],
  controllers: [BisnisOwnerController],
})
export class BisnisOwnerModule {}
