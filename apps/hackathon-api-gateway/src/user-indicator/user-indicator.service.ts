import { GetUserDto } from '@libs/contracts/users/get-user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserIndicatorService {
  constructor(@Inject("USER_INDICATOR_SERVICE") private usersClient: ClientProxy) { }

  async get(data: GetUserDto) {
    console.log("aafa")
    return this.usersClient.send('userIndicator.createCheckingIndicators', data)
  }


}
