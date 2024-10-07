import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fasyankes } from './fasyankes.entity';

@Injectable()
export class FasyankesService {
  constructor(
    @InjectRepository(Fasyankes)
    private readonly fasyankesRepository: Repository<Fasyankes>,
  ) {}

  // Mendapatkan semua data fasyankes
  async findAll(): Promise<Fasyankes[]> {
    return this.fasyankesRepository.find({ relations: ['accessFasyankes'] });
  }
}
