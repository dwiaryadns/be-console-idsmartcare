import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LegalDokumen } from './legal-dokumen.entity';

@Injectable()
export class LegalDokumenService {
  constructor(
    @InjectRepository(LegalDokumen)
    private readonly legalDokumenRepository: Repository<LegalDokumen>,
  ) {}

  // get id dari tabel legal_doc_bo
  async findOne(id: number): Promise<LegalDokumen> {
    return await this.legalDokumenRepository.findOne({ where: { id } });
  }

  // update status
  async updateStatus(
    id: number,
    newStatus: string,
    reason?: string,
  ): Promise<LegalDokumen> {
    const LegalDokumen = await this.legalDokumenRepository.findOne({
      where: { id },
    });
    if (!LegalDokumen) {
      throw new NotFoundException(
        `legal Dokumen dengan ID ${id} tidak ditemukan`,
      );
    }
    if (['pending', 'reject'].includes(newStatus) && !reason) {
      throw new BadRequestException('Alasan wajib diisi.');
    }

    LegalDokumen.status = newStatus;

    if (['pending', 'reject'].includes(newStatus)) {
      LegalDokumen.reason = reason;
    } else {
      LegalDokumen.reason = null;
    }
    LegalDokumen.updated_at = new Date();

    // Simpan perubahan ke database
    return this.legalDokumenRepository.save(LegalDokumen);
  }

  // get
  async findAll(): Promise<LegalDokumen[]> {
    return this.legalDokumenRepository.find({ relations: ['bisnisOwner'] });
  }
}
