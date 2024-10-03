import { AuthService } from './auth.service';
import { AccessConsole } from '../entities/access-console.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAllBisnisOwners(): Promise<AccessConsole[]>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
        data: any;
    }>;
}
