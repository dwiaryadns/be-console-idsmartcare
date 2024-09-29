
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessConsole } from '../entities/access-console.entity';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(AccessConsole)
    private usersRepository: Repository<AccessConsole>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'IdSm4rTC4r32024*#', // Gunakan kunci yang sama dengan di auth.module.ts
    });
  }

  async validate(payload: any) {
    return this.usersRepository.findOne({ where: { id: payload.sub } });
  }
}
