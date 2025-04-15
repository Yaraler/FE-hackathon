import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject("USER_SERVICE") private usersClient: ClientProxy) { }
  async findAll() {
    console.log("aa")
    return this.usersClient.send("user.findAll", {})

  }


}
