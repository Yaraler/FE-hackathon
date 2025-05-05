import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WorkoutsService {
  constructor(@Inject("WORKOUTS_SERVICE") private wrkoutsClient: ClientProxy) { }


  async createFirstWorkout(idUser: string) {
    try {
      return await firstValueFrom(this.wrkoutsClient.send("workouts.create-first-workouts", idUser))
    } catch (error) {
      throw error;
    }
  }
  async getFirstWorkout(idUser: string) {
    try {
      return await firstValueFrom(this.wrkoutsClient.send("workouts.get-first-workouts", idUser))
    } catch (error) {
      throw error;
    }
  }



}
