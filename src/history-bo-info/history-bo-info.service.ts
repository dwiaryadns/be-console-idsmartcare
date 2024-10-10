import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryBoInfo } from './history-bo-info.entity';
import { Repository } from 'typeorm';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
@Injectable()
export class HistoryBoInfoService {
  constructor(
    @InjectRepository(HistoryBoInfo)
    private readonly historyBoInfoRepository: Repository<HistoryBoInfo>,
  ) {}
  // Get data history including business owner name
  async findHistoryBoInfo(
    start_date?: string,
    end_date?: string,
    search: string = '',
    page: number = 1,
    limit: number = 5, // default limit
  ): Promise<any> {
    const queryBuilder = this.historyBoInfoRepository
      .createQueryBuilder('history_bo_info')
      .leftJoinAndSelect('history_bo_info.boInfo', 'bo_infos') // Join with bo_infos
      .leftJoinAndSelect('bo_infos.bisnisOwner', 'bisnis_owners'); // Join with bisnis_owners
    // Filter berdasarkan tanggal jika disediakan
    if (start_date && end_date) {
      const startOfDay = new Date(start_date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(end_date);
      endOfDay.setHours(23, 59, 59, 999);
      queryBuilder.andWhere(
        'history_bo_info.created_at BETWEEN :start AND :end',
        {
          start: startOfDay,
          end: endOfDay,
        },
      );
    }
    // Filter berdasarkan pencarian jika disediakan
    if (search) {
      queryBuilder.andWhere(
        'LOWER(history_bo_info.status) LIKE LOWER(:search) OR LOWER(history_bo_info.petugas) LIKE LOWER(:search) OR LOWER(bisnis_owners.name) LIKE LOWER(:search)',
        {
          search: `%${search.toLowerCase()}%`, // Change to toLowerCase
        },
      );
    }
    // Menambahkan pagination (skip dan take)
    const skip = (page - 1) * limit;
    queryBuilder.skip(skip).take(limit);
    // Pilih field yang diperlukan termasuk nama bisnis owner
    const [result, total] = await queryBuilder
      .select([
        'history_bo_info.id',
        'history_bo_info.status',
        'history_bo_info.petugas',
        'history_bo_info.created_at',
        'bo_infos.businessName',
        'bisnis_owners.name', // Business owner name
      ])
      .getManyAndCount();
    // Mengembalikan hasil beserta meta informasi untuk pagination
    return {
      data: result,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
