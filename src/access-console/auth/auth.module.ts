// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessConsole } from '../entities/access-console.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccessConsole]),
    JwtModule.register({
      secret: 'IdSm4rTC4r32024*#', // Ubah ini dengan kunci rahasia yang lebih aman
      signOptions: { expiresIn: '1d' }, // Token kedaluwarsa dalam 60 detik
    }),
  ],
  providers: [AuthService, JwtAuthStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
