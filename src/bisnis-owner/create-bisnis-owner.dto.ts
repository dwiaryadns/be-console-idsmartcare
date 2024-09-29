export class CreateBisnisOwnerDto {
    nama: string;
    phone: string;
    email: string;
    password: string
    is_send_email?: boolean;
    is_resend?: boolean;
    is_first_login?: boolean;
    img_profile?: string;
    is_2fa?: boolean;
}