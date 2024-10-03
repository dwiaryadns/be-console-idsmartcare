import { LegalDokumenService } from './legal-dokumen.service';
import { LegalDokumen } from './legal-dokumen.entity';
export declare class LegalDokumenController {
    private readonly legalDokumenService;
    constructor(legalDokumenService: LegalDokumenService);
    findAll(): Promise<LegalDokumen[]>;
    findOne(id: number): Promise<LegalDokumen>;
    updateStatus(id: number, status: string, reason?: string): Promise<LegalDokumen>;
}
