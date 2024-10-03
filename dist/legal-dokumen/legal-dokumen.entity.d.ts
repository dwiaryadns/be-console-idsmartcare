import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
export declare class LegalDokumen {
    id: number;
    bisnis_owner_id: number;
    ktp: string;
    akta: string;
    sk_kemenkumham: string;
    npwp: string;
    nib: string;
    iso: string;
    status: string;
    reason: string;
    created_at: Date;
    updated_at: Date;
    bisnisOwner: BisnisOwner;
}
