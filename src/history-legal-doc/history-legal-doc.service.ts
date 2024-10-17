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
      .leftJoinAndSelect('history_legal_doc.boInfo', 'boInfo') // Join ke bo_infos
      .leftJoinAndSelect('boInfo.bisnisOwner', 'bisnisOwner'); // Join ke bisnis_owners

    // Mapping status bahasa Indonesia ke bahasa Inggris
    const statusMapping: { [key: string]: string } = {
      disetujui: 'approved',
      ditolak: 'rejected',
      perbaikan: 'pending',
      terdaftar: 'apply',
      ditinjau: 'on review',
    };

    // Ubah nilai search berdasarkan mapping
    const lowerSearch = search.toLowerCase();
    const mappedSearch = statusMapping[lowerSearch] || lowerSearch; // Default ke search jika tidak ada di mapping

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
        'LOWER(history_legal_doc.status) LIKE LOWER(:mappedSearch) OR LOWER(history_legal_doc.petugas) LIKE LOWER(:search) OR LOWER(bisnisOwner.name) LIKE LOWER(:search)',
        {
          mappedSearch: `%${mappedSearch}%`, // Menggunakan hasil mapping status
          search: `%${search.toLowerCase()}%`, // Tetap menggunakan original search untuk petugas dan nama bisnis
        },
      );
    }

    // Menambahkan pagination (skip dan take)
    const skip = (page - 1) * limit;
    queryBuilder.skip(skip).take(limit);
    queryBuilder.orderBy('history_legal_doc.created_at', 'DESC');

    // Eksekusi query dan kembalikan hasilnya
    const [items, total] = await queryBuilder
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
    const results = {
      data: instanceToPlain(items),
      totalItems: total,
      curentPage: page,
      totalPages: Math.ceil(total / limit),
    };

    return results;
  }
}
