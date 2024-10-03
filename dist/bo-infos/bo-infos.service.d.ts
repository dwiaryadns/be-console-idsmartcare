import { Repository } from 'typeorm';
import { BoInfos } from './bo-infos.entity';
export declare class BoInfosService {
    private readonly boInfosRepository;
    constructor(boInfosRepository: Repository<BoInfos>);
    findOne(id: number): Promise<BoInfos>;
    updateStatus(id: number, status: string, reason?: string): Promise<BoInfos>;
    findAll(): Promise<BoInfos[]>;
}
