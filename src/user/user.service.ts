import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findOne(email: string): Promise<any | undefined> {
  }
}
