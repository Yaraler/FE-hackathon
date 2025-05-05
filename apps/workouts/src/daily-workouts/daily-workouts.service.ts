import { IExercises } from '@libs/contracts/user-indicators/ICheckingIndicator';
import { ICreateWorkouts } from '@libs/contracts/workouts/ICreateWorkouts';
import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { BrigadeService } from 'apps/brigade/src/brigade/brigade.service';
import { UserService } from 'apps/users/src/user/user.service';
import { AiRouterService } from 'shared/lib/ai-router/ai-router.service';
import { MongoRepository, Repository } from 'typeorm';
import { DailyWorkouts } from './entity/daily-workouts.entity';
import { create } from 'domain';
import { User } from 'apps/users/src/user/entity/user.entity';
import { ObjectId } from 'mongodb';
import { ExercisesService } from '../exercises/exercises.service';

@Injectable()
export class DailyWorkoutsService {
  constructor(
    private readonly aiRouterService: AiRouterService,
    private readonly userService: UserService,
    private readonly brigadeService: BrigadeService,
    private readonly exercisesService: ExercisesService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,

    @Inject('DAILY_WORKOUTS')
    private readonly dailyWorkoutsRepository: MongoRepository<DailyWorkouts>,
  ) { }
  async createFirstWorkoutsCheckIndicators(idUser: string) {
    try {
      const user = await this.userService.findById(idUser)
      if (user.FirstWorkoutICheckndicatorId) {
        throw new InternalServerErrorException('User alerdi have firstWorkouts ');
      }
      const brigade = await this.brigadeService.getOneBrigade(user.brigadeId)
      const res = await this.aiRouterService.createFirstWorkoutsCheckingIndicators(brigade.requirements)
      const data: ICreateWorkouts = {
        name: "check your indicator",
        description: "",
        userId: idUser,
      }
      const exercisesId = await this.exercisesService.createExercises(res)
      data.exercisesId = exercisesId
      console.log(exercisesId)
      const saveWorkouts = await this.createWorkouts(data)
      user.FirstWorkoutICheckndicatorId = saveWorkouts._id
      this.userRepository.save(user)

      return res
    } catch (error) {
      throw error;
    }
  }
  async createWorkouts(data: ICreateWorkouts) {
    try {
      const daily = this.dailyWorkoutsRepository.create({
        name: data.name,
        description: data.description,
        userId: data.userId,
        state: false,
        exercisesId: data?.exercisesId?.map(id => id.toString()),
        day: new Date()
      })
      const res = await this.dailyWorkoutsRepository.save(daily)
      return res
    } catch (error) {
      throw error;
    }
  }
  async getFirstWorkouts(idUser: string) {
    try {
      const user = await this.userService.findById(idUser)
      if (!user.FirstWorkoutICheckndicatorId) {
        throw new InternalServerErrorException('Usere alerdy have firstWorkouts ');
      }
      return await this.getWorkoutsWithExercises(user.FirstWorkoutICheckndicatorId)

    } catch (error) {
      throw error;
    }
  }
  async getWorkoutsWithExercises(id: string) {
    try {
      const workouts = await this.dailyWorkoutsRepository.findOne({
        where: {
          _id: new ObjectId(id)
        }
      });
      if (!workouts?.exercisesId) return { exercises: null, workouts }
      const exercises = await this.exercisesService.getExercises(workouts.exercisesId)



      return { workouts, exercises }
    } catch (error) {
      throw error;
    }

  }

}


