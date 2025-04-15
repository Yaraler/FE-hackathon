import { Test, TestingModule } from '@nestjs/testing';
import { BridageController } from './bridage.controller';
import { BridageService } from './bridage.service';

describe('BridageController', () => {
  let bridageController: BridageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BridageController],
      providers: [BridageService],
    }).compile();

    bridageController = app.get<BridageController>(BridageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bridageController.getHello()).toBe('Hello World!');
    });
  });
});
