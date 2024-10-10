import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fasyankes } from './fasyankes.entity';
import { classToPlain } from 'class-transformer';

@Injectable()
export class FasyankesService {
  constructor(
    @InjectRepository(Fasyankes)
    private readonly fasyankesRepository: Repository<Fasyankes>,
  ) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
    search: string = '',
    is_active: boolean,
  ): Promise<any> {
    const queryBuilder =
      this.fasyankesRepository.createQueryBuilder('fasyankes');

    if (search) {
      queryBuilder.where(
        'LOWER(fasyankes.name) LIKE LOWER(:search)  OR LOWER(fasyankes.email) LIKE LOWER(:search) ',
        {
          search: `%${search.toLocaleLowerCase()}%`,
        },
      );
    }

    if (is_active) {
      queryBuilder.andWhere('fasyankes.is_active = :is_active', { is_active });
    }

    queryBuilder.skip((page - 1) * limit).take(limit);

    queryBuilder.leftJoinAndSelect(
      'fasyankes.accessFasyankes',
      'accessFasyankes',
    );

    const [items, total] = await queryBuilder.getManyAndCount();

    const results = {
      data: classToPlain(items),
      totalItems: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    };

    return results;
  }
}
