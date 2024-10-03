import { Repository } from 'typeorm';
import { LegalDokumen } from './legal-dokumen.entity';
export declare class LegalDokumenService {
    private readonly legalDokumenRepository;
    constructor(legalDokumenRepository: Repository<LegalDokumen>);
    findOne(id: number): Promise<LegalDokumen>;
    updateStatus(id: number, newStatus: string, reason?: string): Promise<LegalDokumen>;
    findAll(): Promise<LegalDokumen[]>;
}
