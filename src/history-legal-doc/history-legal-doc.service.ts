import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryLegalDoc } from './history-legal-doc.entity';
import { Repository } from 'typeorm';
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
      .leftJoinAndSelect('history_legal_doc.boInfo', 'boInfo') // Join ke bo_infos
      .leftJoinAndSelect('boInfo.bisnisOwner', 'bisnisOwner'); // Join ke bisnis_owners
    // Filter berdasarkan tanggal jika ada start_date dan end_date
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
    // Pencarian berdasarkan status atau petugas jika parameter search diberikan
    if (search) {
      queryBuilder.andWhere(
        'LOWER(history_legal_doc.status) LIKE LOWER(:search) OR LOWER(history_legal_doc.petugas) LIKE LOWER(:search) OR LOWER(bisnis_owners.name) LIKE LOWER(:search)',
        {
          search: `%${search.toLowerCase()}%`, // Change to toLowerCase
        },
      );
    }
    // Menambahkan pagination (skip dan take)
    const skip = (page - 1) * limit;
    queryBuilder.skip(skip).take(limit);
    // Eksekusi query dan kembalikan hasilnya
    const [result, total] = await queryBuilder
      .select([
        'history_legal_doc.id',
        'history_legal_doc.status',
        'history_legal_doc.petugas',
        'history_legal_doc.created_at',
        'boInfo.businessName',
        'bisnisOwner.name', // Ambil nama dari bisnisOwner
      ])
      .getManyAndCount();
    //   mengembalikan hasil pagination
    return {
      data: result,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
