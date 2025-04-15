import { Controller } from '@nestjs/common';
import { DailyWorkoutsService } from './daily-workouts.service';

@Controller('daily-workouts')
export class DailyWorkoutsController {
  constructor(private readonly dailyWorkoutsService: DailyWorkoutsService) {}
}
