import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AccessConsole } from '../entities/access-console.entity';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<AccessConsole>, jwtService: JwtService);
    findAll(): Promise<AccessConsole[]>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        data: any;
    }>;
}
