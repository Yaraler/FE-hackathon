import { Module } from '@nestjs/common';
import { DailyWorkoutsService } from './daily-workouts.service';
import { DailyWorkoutsController } from './daily-workouts.controller';

@Module({
  controllers: [DailyWorkoutsController],
  providers: [DailyWorkoutsService],
})
export class DailyWorkoutsModule {}
