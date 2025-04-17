import { Test, TestingModule } from '@nestjs/testing';
import { BridageController } from './bridage.controller';
import { BridageService } from './bridage.service';

describe('BridageController', () => {
  let controller: BridageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BridageController],
      providers: [BridageService],
    }).compile();

    controller = module.get<BridageController>(BridageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
