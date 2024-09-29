import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BisnisOwner } from './bisnis-owner.entity';
import { CreateBisnisOwnerDto } from './create-bisnis-owner.dto';
import { UpdateBisnisOwnerDto } from './update-bisnis-owner.dto';

@Injectable()
export class BisnisOwnerService {
  constructor(
    @InjectRepository(BisnisOwner)
    private bisnisOwnerRepository: Repository<BisnisOwner>,
  ) {}

  // service untuk mengambil semua data bisnis_owners GET
  async findAll(): Promise<BisnisOwner[]> {
    return this.bisnisOwnerRepository.find({
      relations: ['boInfos', 'legalDokumen'] ,
    });
  }

  // service untuk menyimpan data bisnis_owners baru POST
  async create(createDto: CreateBisnisOwnerDto): Promise<BisnisOwner> {
    const newOwner = this.bisnisOwnerRepository.create(createDto);
    return this.bisnisOwnerRepository.save(newOwner);
  }

  // service untuk delete
  async delete(id: number): Promise<boolean> {
    const result = await this.bisnisOwnerRepository.delete(id);
    return result.affected > 0;
  }

  // service untuk put
  async update(
    id: number,
    updateDto: UpdateBisnisOwnerDto,
  ): Promise<BisnisOwner> {
    const bisnisOwner = await this.bisnisOwnerRepository.findOne({
      where: { id },
    });
    if (!bisnisOwner) {
      return null;
    }

    // Update the bisnis owner data
    Object.assign(bisnisOwner, updateDto);

    // Save the updated bisnis owner to the database
    return this.bisnisOwnerRepository.save(bisnisOwner);
  }
}
