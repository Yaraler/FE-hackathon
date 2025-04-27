import { Module } from '@nestjs/common';
import { BridageService } from './bridage.service';
import { BridageController } from './bridage.controller';
import { MulterModule } from '@nestjs/platform-express';
import * as Multer from 'multer';
@Module({
  imports: [
    MulterModule.register({
      storage: Multer.memoryStorage(),
      limits: {
        fileSize: 10 * 1024 * 1024,
      },
    })],
  controllers: [BridageController],
  providers: [BridageService],
})
export class BridageModule { }
