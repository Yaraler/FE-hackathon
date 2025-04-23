import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { MyLoggerModule } from '@app/my-logger';
import { DatabaseModule } from '@libs/database/src';
@Module({
  imports: [DatabaseModule, MyLoggerModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService, ...userProviders],

})
export class UserModule { }
