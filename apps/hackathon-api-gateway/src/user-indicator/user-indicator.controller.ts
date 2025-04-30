import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UserIndicatorService } from './user-indicator.service';
import { JwtAuthGuard } from '@libs/guards/src';
import { GetUserDto } from '@libs/contracts/users/get-user.dto';
import { Request as ExpressRequest } from 'express';

@Controller('user-indicator')
export class UserIndicatorController {
  constructor(private readonly userIndicatorService: UserIndicatorService) { }
  @Get("create")
  @UseGuards(JwtAuthGuard)
  async get(@Request() data: ExpressRequest & { user: GetUserDto }) {
    return this.userIndicatorService.get(data.user)
  }


}
