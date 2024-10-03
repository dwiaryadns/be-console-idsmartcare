import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import { LegalDokumen } from 'src/legal-dokumen/legal-dokumen.entity';
export declare class BisnisOwner {
    id: number;
    name: string;
    phone: string;
    email: string;
    email_verified_at?: Date;
    password: string;
    is_send_email: boolean;
    is_resend: boolean;
    is_first_login: boolean;
    img_profile?: string;
    is_2fa: boolean;
    remember_token?: string;
    created_at: Date;
    updated_at: Date;
    boInfos: BoInfos;
    legalDokumen: LegalDokumen;
}
