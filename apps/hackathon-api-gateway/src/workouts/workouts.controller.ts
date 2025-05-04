import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { JwtAuthGuard } from '@libs/guards/src';
import { GetUserDto } from '@libs/contracts/users/get-user.dto';
import { Request as ExpressRequest } from 'express';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) { }
  @Post("create-first-workout")
  @UseGuards(JwtAuthGuard)
  async get(@Request() data: ExpressRequest & { user: GetUserDto }) {
    return this.workoutsService.createFirstWorkout(data.user.userId)
  }

}
