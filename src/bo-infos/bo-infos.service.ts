import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoInfos } from './bo-infos.entity';

@Injectable()
export class BoInfosService {
  constructor(
    @InjectRepository(BoInfos)
    private readonly boInfosRepository: Repository<BoInfos>,
  ) {}

  // get id dari tabel bo-infos
  async findOne(id: number): Promise<BoInfos> {
    return await this.boInfosRepository.findOne({ where: { id } });
  }

  // update status
  async updateStatus(
    id: number,
    status: string,
    reason?: string,
  ): Promise<BoInfos> {
    const boInfo = await this.boInfosRepository.findOne({ where: { id } });

    if (!boInfo) {
      throw new NotFoundException(`BoInfos dengan ID ${id} tidak ditemukan`);
    }
    if (['pending', 'reject'].includes(status) && !reason) {
      throw new BadRequestException('Alasan wajib diisi.');
    }

    boInfo.status = status;

    if (['pending', 'reject'].includes(status)) {
      boInfo.reason = reason;
    } else {
      boInfo.reason = null;
    }
    boInfo.updated_at = new Date();

    return this.boInfosRepository.save(boInfo);
  }

  // relation
  async findAll(): Promise<BoInfos[]> {
    return this.boInfosRepository.find({ relations: ['bisnisOwner'] });
  }
}
