import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BridageModule } from './bridage/bridage.module';

@Module({
  imports: [UserModule, AuthModule, BridageModule],
  controllers: [],
  providers: [],
})
export class HackathonApiGatewayModule { }
