import { Module } from '@nestjs/common';
import { AiRouterService } from './ai-router.service';
import { AiRouterController } from './ai-router.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import openRouterConfig from '@libs/config/open-router.config';

@Module({
  imports: [HttpModule,
    ConfigModule.forRoot({
      load: [openRouterConfig],
    })
    ,],
  controllers: [AiRouterController],
  providers: [
    AiRouterService,
    {
      provide: 'CONFIGURATION(open-router)',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('open-router'),
    },
  ],
  exports: [AiRouterService]
})
export class AiRouterModule { }
