import { BisnisOwnerService } from './bisnis-owner.service';
import { BisnisOwner } from './bisnis-owner.entity';
import { CreateBisnisOwnerDto } from './create-bisnis-owner.dto';
import { UpdateBisnisOwnerDto } from './update-bisnis-owner.dto';
export declare class BisnisOwnerController {
    private readonly bisnisOwnerService;
    constructor(bisnisOwnerService: BisnisOwnerService);
    getAllBisnisOwners(page?: number, limit?: number, search?: string, status?: string): Promise<any>;
    create(createDto: CreateBisnisOwnerDto): Promise<BisnisOwner>;
    delete(id: number): Promise<{
        massage: string;
    }>;
    update(id: number, updateDto: UpdateBisnisOwnerDto): Promise<BisnisOwner>;
}
