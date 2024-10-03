import { Repository } from 'typeorm';
import { BisnisOwner } from './bisnis-owner.entity';
import { CreateBisnisOwnerDto } from './create-bisnis-owner.dto';
import { UpdateBisnisOwnerDto } from './update-bisnis-owner.dto';
export declare class BisnisOwnerService {
    private bisnisOwnerRepository;
    constructor(bisnisOwnerRepository: Repository<BisnisOwner>);
    findAll(): Promise<BisnisOwner[]>;
    create(createDto: CreateBisnisOwnerDto): Promise<BisnisOwner>;
    delete(id: number): Promise<boolean>;
    update(id: number, updateDto: UpdateBisnisOwnerDto): Promise<BisnisOwner>;
}
