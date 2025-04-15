import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { BridageModule } from './bridage/bridage.module';
import { DailyWorkoutsModule } from './daily-workouts/daily-workouts.module';
@Module({
  imports: [ConfigModule.forRoot(), UserModule, BridageModule, DailyWorkoutsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
