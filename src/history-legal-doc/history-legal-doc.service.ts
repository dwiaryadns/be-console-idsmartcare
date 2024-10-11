import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryLegalDoc } from './history-legal-doc.entity';
import { Repository } from 'typeorm';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class HistoryLegalDocService {
  constructor(
    @InjectRepository(HistoryLegalDoc)
    private readonly historyLegalDocRepository: Repository<HistoryLegalDoc>,
  ) {}

  async findHistoryLegalDoc(
    start_date?: string,
    end_date?: string,
    search: string = '',
    page: number = 1,
    limit: number = 5,
  ): Promise<any> {
    const queryBuilder = this.historyLegalDocRepository
      .createQueryBuilder('history_legal_doc')
      .leftJoinAndSelect('history_legal_doc.boInfo', 'boInfo')
      .leftJoinAndSelect('boInfo.bisnisOwner', 'bisnisOwner');

    const statusMapping: { [key: string]: string } = {
      disetujui: 'approved',
      ditolak: 'rejected',
      perbaikan: 'pending',
      terdaftar: 'apply',
      ditinjau: 'on review',
    };

    const lowerSearch = search.toLowerCase();
    const mappedSearch = statusMapping[lowerSearch] || lowerSearch;

    if (start_date && end_date) {
      const startOfDay = new Date(start_date);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(end_date);
      endOfDay.setHours(23, 59, 59, 999);

      queryBuilder.andWhere(
        'history_legal_doc.created_at BETWEEN :startOfDay AND :endOfDay',
        {
          startOfDay,
          endOfDay,
        },
      );
    }

    if (search) {
      queryBuilder.andWhere(
        'LOWER(history_legal_doc.status) LIKE LOWER(:mappedSearch) OR LOWER(history_legal_doc.petugas) LIKE LOWER(:search) OR LOWER(bisnisOwner.name) LIKE LOWER(:search)',
        {
          mappedSearch: `%${mappedSearch}%`,
          search: `%${search.toLowerCase()}%`,
        },
      );
    }

    const skip = (page - 1) * limit;
    queryBuilder.skip(skip).take(limit);

    const [items, total] = await queryBuilder
      .select([
        'history_legal_doc.id',
        'history_legal_doc.status',
        'history_legal_doc.petugas',
        'history_legal_doc.created_at',
        'boInfo.businessName',
        'bisnisOwner.name',
      ])
      .getManyAndCount();

    const results = {
      data: instanceToPlain(items),
      totalItems: total,
      curentPage: page,
      totalPages: Math.ceil(total / limit),
    };

    return results;
  }
}
