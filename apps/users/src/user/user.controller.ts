import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

export class UserController {
  constructor(private readonly userService: UserService) { }
  @MessagePattern('user.findAll')
  findAll() {
    console.log(`Pattern: `);
    return "user find"
  }
}
