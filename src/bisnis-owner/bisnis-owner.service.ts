import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BisnisOwner } from './bisnis-owner.entity';
import { CreateBisnisOwnerDto } from './create-bisnis-owner.dto';
import { UpdateBisnisOwnerDto } from './update-bisnis-owner.dto';
import { classToPlain } from 'class-transformer';

@Injectable()
export class BisnisOwnerService {
  constructor(
    @InjectRepository(BisnisOwner)
    private bisnisOwnerRepository: Repository<BisnisOwner>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
    search: string = '',
    status: string = '',
  ): Promise<any> {
    const queryBuilder =
      this.bisnisOwnerRepository.createQueryBuilder('bisnisOwner');
    if (search) {
      queryBuilder.where(
        'LOWER(bisnisOwner.name) LIKE LOWER(:search) OR LOWER(bisnisOwner.email) LIKE LOWER(:search)',
        {
          search: `%${search.toLowerCase()}%`,
        },
      );
    }

    if (status) {
      queryBuilder.andWhere(
        '(boInfos.status = :status OR legalDokumen.status = :status)',
        { status },
      );
    }

    queryBuilder.skip((page - 1) * limit).take(limit);
    queryBuilder.leftJoinAndSelect('bisnisOwner.boInfos', 'boInfos');
    queryBuilder.leftJoinAndSelect('bisnisOwner.legalDokumen', 'legalDokumen');
    const [items, total] = await queryBuilder.getManyAndCount();
    const results = {
      data: classToPlain(items),
      totalItems: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    };
    return results;
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
