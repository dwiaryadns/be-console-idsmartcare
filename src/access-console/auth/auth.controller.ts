import { Controller, Post,Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessConsole } from '../entities/access-console.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async getAllBisnisOwners(): Promise<AccessConsole[]> {
    return this.authService.findAll();
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return this.authService.login(user);
  }
}
