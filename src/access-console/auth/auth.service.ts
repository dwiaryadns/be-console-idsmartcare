// src/auth/auth.service.ts
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessConsole } from '../entities/access-console.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AccessConsole)
    private usersRepository: Repository<AccessConsole>,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<AccessConsole[]> {
    return this.usersRepository.find();
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { username } });

    if (!user) {
      throw new UnauthorizedException('Username atau password salah');
    }

    // Ubah $2y$ menjadi $2a$ pada hash bcrypt jika perlu
    const convertedHash = user.password.replace('$2y$', '$2a$');

    // Bandingkan password yang dikirimkan pengguna dengan hash yang tersimpan
    const isMatch = await bcrypt.compare(password, convertedHash);

    if (user && isMatch) {
      if (!user.is_active) {
        throw new ForbiddenException('Akun ini tidak aktif');
      }
      // Menghilangkan password dari response
      const { password, ...result } = user;
      return result;
    }

    throw new UnauthorizedException('Username atau password salah');
  }
  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    return {
      access_token: this.jwtService.sign(payload),
      data: user,
    };
  }
}
