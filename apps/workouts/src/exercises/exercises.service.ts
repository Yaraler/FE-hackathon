import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { Exercises } from './entity/exercises';
import { IExercises } from '@libs/contracts/user-indicators/ICheckingIndicator';
import { ObjectId } from 'mongodb';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject('EXERCISES')
    private readonly exercisesRepository: MongoRepository<Exercises>,
  ) { }
  async createExercise(data: IExercises) {
    try {
      const exercise = this.exercisesRepository.create({
        name: data.name,
        exercise: data.exercise,
        count: data.count,
      })
      return await this.exercisesRepository.save(exercise)
    } catch (error) {
      throw error;
    }
  }
  async getExercises(id: string[]) {
    try {
      const objectIds = id.map(i => new ObjectId(i));
      const exercises = await this.exercisesRepository.find({
        where: {
          _id: {
            $in: objectIds
          }
        }
      })
      return exercises;

    } catch (error) {
      throw error;
    }

  }

  async createExercises(data: IExercises[]) {
    try {
      const createdExercises = await Promise.all(
        data.map(async (item) =>
          await this.createExercise(item))
      );
      const exerciseIds = createdExercises.map(ex => ex._id.toString());
      return exerciseIds
    } catch (error) {
      throw error;
    }
  }

}
