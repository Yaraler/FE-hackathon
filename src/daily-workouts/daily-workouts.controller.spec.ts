import { Test, TestingModule } from '@nestjs/testing';
import { DailyWorkoutsController } from './daily-workouts.controller';
import { DailyWorkoutsService } from './daily-workouts.service';

describe('DailyWorkoutsController', () => {
  let controller: DailyWorkoutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyWorkoutsController],
      providers: [DailyWorkoutsService],
    }).compile();

    controller = module.get<DailyWorkoutsController>(DailyWorkoutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
