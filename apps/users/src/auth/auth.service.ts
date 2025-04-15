import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { ValidateUserDto } from '@libs/contracts/users/validateUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService
  ) { }
  async validateUser(data: ValidateUserDto): Promise<any> {
    const user = await this.userService.findOne(data.email);
    if (user) {
      const verifyPassword = await bcrypt.compareSync(data.password, user.password);

      if (!verifyPassword) {
        return null
      }
      return user
    }
    return null;
  }
  async registration(): Promise<any> {
    try {
    } catch (error) {
      console.error('Registration error:', error);
      throw new InternalServerErrorException('Registration failed');
    }
  }

}
