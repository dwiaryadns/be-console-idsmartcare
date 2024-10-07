import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessFasyankes } from './access_fasyankes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccessFasyankesService {
  constructor(
    @InjectRepository(AccessFasyankes)
    private readonly accessFasyankesRepository: Repository<AccessFasyankes>,
  ) {}

  async findAll(): Promise<AccessFasyankes[]> {
    return this.accessFasyankesRepository.find({
      relations: ['fasyankes'],
    });
  }
}
