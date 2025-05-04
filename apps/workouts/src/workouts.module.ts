import { Module } from '@nestjs/common';
import { WorkoutsController } from './workouts.controller';
import { WorkoutsService } from './workouts.service';
import { ExercisesModule } from './exercises/exercises.module';
import { DailyWorkoutsModule } from './daily-workouts/daily-workouts.module';

@Module({
  imports: [ExercisesModule, DailyWorkoutsModule],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
})
export class WorkoutsModule { }
