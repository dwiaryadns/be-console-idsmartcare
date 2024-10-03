import { BoInfosService } from './bo-infos.service';
import { BoInfos } from './bo-infos.entity';
export declare class BoInfosController {
    private readonly boInfosService;
    constructor(boInfosService: BoInfosService);
    findAll(): Promise<BoInfos[]>;
    findOne(id: number): Promise<BoInfos>;
    updateStatus(id: number, status: string, reason?: string): Promise<BoInfos>;
}
