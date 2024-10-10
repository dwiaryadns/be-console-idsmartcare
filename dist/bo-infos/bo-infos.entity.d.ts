import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
import { HistoryBoInfo } from 'src/history-bo-info/history-bo-info.entity';
import { HistoryLegalDoc } from 'src/history-legal-doc/history-legal-doc.entity';
export declare class BoInfos {
    id: number;
    bisnis_owner_id: number;
    businessId: string;
    businessType: string;
    businessName: string;
    businessEmail: string;
    phone: string;
    mobile: string;
    address: string;
    province: string;
    city: string;
    subdistrict: string;
    village: string;
    postal_code: string;
    status: string;
    reason: string;
    created_at: Date;
    updated_at: Date;
    historyBoInfos: HistoryBoInfo[];
    bisnisOwner: BisnisOwner;
    historyLegalDocs: HistoryLegalDoc[];
}
