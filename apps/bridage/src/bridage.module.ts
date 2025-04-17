import { Module } from '@nestjs/common';
import { BridageController } from './bridage.controller';
import { BridageService } from './bridage.service';

@Module({
  imports: [],
  controllers: [BridageController],
  providers: [BridageService],
})
export class BridageModule {}
