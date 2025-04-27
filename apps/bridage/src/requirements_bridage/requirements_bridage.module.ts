import { forwardRef, Module } from '@nestjs/common';
import { RequirementsBridageService } from './requirements_bridage.service';
import { RequirementsBridageController } from './requirements_bridage.controller';
import { BridageService } from '../bridage/bridage.service';
import { requirementsBridageProviders } from './provider/requirements-bridage';
import { MyLoggerModule, MyLoggerService } from '@app/my-logger';
import { DatabaseModule } from '@libs/database/src';
import { bridageProviders } from '../bridage/provides/bridage';
import { BridageModule } from '../bridage/bridage.module';
@Module({
  imports: [DatabaseModule,
    forwardRef(() => BridageModule)
  ],
  controllers: [RequirementsBridageController],
  providers: [RequirementsBridageService, ...requirementsBridageProviders, ...bridageProviders],
  exports: [RequirementsBridageService, ...requirementsBridageProviders],
})
export class RequirementsBridageModule { }
