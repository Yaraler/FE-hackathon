import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WorkoutsService {
  constructor(@Inject("WORKOUTS_SERVICE") private wrkoutsClient: ClientProxy) { }


  async createFirstWorkout(idUser: string) {
    try {
      console.log(idUser)
      return await firstValueFrom(this.wrkoutsClient.send("workouts.create-first-workouts", idUser))


    } catch (error) {
      throw error;
    }

  }
}
