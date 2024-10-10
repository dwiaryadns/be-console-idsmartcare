import { Repository } from 'typeorm';
import { Fasyankes } from './fasyankes.entity';
export declare class FasyankesService {
    private readonly fasyankesRepository;
    constructor(fasyankesRepository: Repository<Fasyankes>);
    findAll(page: number, limit: number, search: string, is_active: boolean): Promise<any>;
}
