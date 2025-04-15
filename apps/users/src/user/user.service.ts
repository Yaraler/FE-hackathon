import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) { }

  async findOne(email: string): Promise<any | undefined> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['bridage', 'dailyWorkout'],
    });
  }
}
