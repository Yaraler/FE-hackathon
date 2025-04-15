import { Test, TestingModule } from '@nestjs/testing';
import { DailyWorkoutsService } from './daily-workouts.service';

describe('DailyWorkoutsService', () => {
  let service: DailyWorkoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyWorkoutsService],
    }).compile();

    service = module.get<DailyWorkoutsService>(DailyWorkoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
