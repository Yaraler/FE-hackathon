import { Test, TestingModule } from '@nestjs/testing';
import { BridageService } from './bridage.service';

describe('BridageService', () => {
  let service: BridageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BridageService],
    }).compile();

    service = module.get<BridageService>(BridageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
