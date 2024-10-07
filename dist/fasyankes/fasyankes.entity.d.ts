import { AccessFasyankes } from 'src/access_fasyankes/access_fasyankes.entity';
export declare class Fasyankes {
    fasyankesId: string;
    warehouse_id: number;
    bisnis_owner_id: number;
    type: string;
    name: string;
    address: string;
    pic: string;
    pic_number: string;
    email: string;
    latitude: string;
    longitude: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    accessFasyankes: AccessFasyankes[];
}
