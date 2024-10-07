import { Test, TestingModule } from '@nestjs/testing';
import { AccessFasyankesService } from './access_fasyankes.service';

describe('AccessFasyankesService', () => {
  let service: AccessFasyankesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessFasyankesService],
    }).compile();

    service = module.get<AccessFasyankesService>(AccessFasyankesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
