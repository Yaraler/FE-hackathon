import { Module } from '@nestjs/common';
import { UserIndicatorsModule } from './user-indicator/user-indicator.module';

@Module({
  imports: [UserIndicatorsModule],
  controllers: [],
  providers: [],
})
export class UserIndicatorModule { }
