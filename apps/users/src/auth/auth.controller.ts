import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { ValidateUserDto } from '@libs/contracts/users/validateUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @MessagePattern("auth.validateUser")
  async validateUser(data: ValidateUserDto) {
    this.authService.validateUser(data)
  }
  @MessagePattern("auth.registration")
  async registration(data: ValidateUserDto) {
    this.authService.registration(data)
  }
}
