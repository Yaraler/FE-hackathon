import { Module } from '@nestjs/common';
import { BridageService } from './bridage.service';
import { BridageController } from './bridage.controller';

@Module({
  controllers: [BridageController],
  providers: [BridageService],
})
export class BridageModule {}
