import { Controller } from '@nestjs/common';
import { UserIndicatorsService } from './user-indicator.service';
import { GetUserDto } from '@libs/contracts/users/get-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('userIndicator')
export class UserIndicatorsController {
  constructor(private readonly userIndicatorService: UserIndicatorsService) { }
  @MessagePattern('userIndicator.createCheckingIndicators')
  async createCheckingIndicators(data: GetUserDto) {
    console.log("aaa")
    return await this.userIndicatorService.createCheckingIndicators(data.userId)
  }
}
