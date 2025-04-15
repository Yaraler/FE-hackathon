import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from 'apps/workouts/src/database/database.mdoule';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class UsersModule { }
