import { FasyankesService } from './fasyankes.service';
import { Fasyankes } from './fasyankes.entity';
export declare class FasyankesController {
    private readonly fasyankesService;
    constructor(fasyankesService: FasyankesService);
    getAllFasyankes(): Promise<Fasyankes[]>;
}
