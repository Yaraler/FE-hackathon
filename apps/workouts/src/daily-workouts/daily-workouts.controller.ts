import { Controller } from '@nestjs/common';
import { DailyWorkoutsService } from './daily-workouts.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('daily-workouts')
export class DailyWorkoutsController {
  constructor(private readonly dailyWorkoutsService: DailyWorkoutsService) { }
  @MessagePattern("workouts.create-first-workouts")
  async createFirstWorkoutsCheckIndicators(idUser: string) {
    return await this.dailyWorkoutsService.createFirstWorkoutsCheckIndicators(idUser)
  }
}
