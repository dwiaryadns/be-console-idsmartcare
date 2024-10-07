import { Test, TestingModule } from '@nestjs/testing';
import { AccessFasyankesController } from './access_fasyankes.controller';

describe('AccessFasyankesController', () => {
  let controller: AccessFasyankesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessFasyankesController],
    }).compile();

    controller = module.get<AccessFasyankesController>(AccessFasyankesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
