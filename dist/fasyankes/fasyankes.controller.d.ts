import { FasyankesService } from './fasyankes.service';
export declare class FasyankesController {
    private readonly fasyankesService;
    constructor(fasyankesService: FasyankesService);
    getAllFasyankes(page: number, limit: number, search: string, is_active: boolean): Promise<any>;
}
