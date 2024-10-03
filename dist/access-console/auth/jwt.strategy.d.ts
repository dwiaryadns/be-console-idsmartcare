import { Repository } from 'typeorm';
import { AccessConsole } from '../entities/access-console.entity';
declare const JwtAuthStrategy_base: new (...args: any[]) => any;
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    private usersRepository;
    constructor(usersRepository: Repository<AccessConsole>);
    validate(payload: any): Promise<AccessConsole>;
}
export {};
