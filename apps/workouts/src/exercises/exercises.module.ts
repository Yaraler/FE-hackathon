import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { exercisesProviders } from './provider/exercises.provides';
import { DatabaseModule } from '@libs/database/src';

@Module({
  imports: [DatabaseModule],
  controllers: [ExercisesController],
  providers: [ExercisesService, ...exercisesProviders],
  exports: [ExercisesService, ...exercisesProviders]
})
export class ExercisesModule { }
