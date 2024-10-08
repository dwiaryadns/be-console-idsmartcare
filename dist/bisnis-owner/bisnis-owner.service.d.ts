import { Repository } from 'typeorm';
import { BisnisOwner } from './bisnis-owner.entity';
import { CreateBisnisOwnerDto } from './create-bisnis-owner.dto';
import { UpdateBisnisOwnerDto } from './update-bisnis-owner.dto';
export declare class BisnisOwnerService {
    private bisnisOwnerRepository;
    constructor(bisnisOwnerRepository: Repository<BisnisOwner>);
    findAll(page?: number, limit?: number, search?: string, status?: string): Promise<any>;
    create(createDto: CreateBisnisOwnerDto): Promise<BisnisOwner>;
    delete(id: number): Promise<boolean>;
    update(id: number, updateDto: UpdateBisnisOwnerDto): Promise<BisnisOwner>;
}
