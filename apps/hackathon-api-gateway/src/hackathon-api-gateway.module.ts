import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BridageModule } from './brigade/bridage.module';
import { UserIndicatorModule } from './user-indicator/user-indicator.module';

@Module({
  imports: [UserModule, AuthModule, BridageModule, UserIndicatorModule],
  controllers: [],
  providers: [],
})
export class HackathonApiGatewayModule { }
