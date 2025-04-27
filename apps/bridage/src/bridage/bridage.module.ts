import { forwardRef, Module } from '@nestjs/common';
import { BridageService } from './bridage.service';
import { BridageController } from './bridage.controller';
import { bridageProviders } from './provides/bridage';
import { RequirementsBridageService } from '../requirements_bridage/requirements_bridage.service';
import { MyLoggerModule, MyLoggerService } from '@app/my-logger';
import { DatabaseModule } from '@libs/database/src';
import { requirementsBridageProviders } from '../requirements_bridage/provider/requirements-bridage';
import { RequirementsBridageModule } from '../requirements_bridage/requirements_bridage.module';

@Module({
  imports: [
    DatabaseModule,
    MyLoggerModule,
    forwardRef(() => RequirementsBridageModule),
  ],
  controllers: [BridageController],
  providers: [BridageService, ...bridageProviders, ...requirementsBridageProviders],
  exports: [BridageService, ...bridageProviders],
})
export class BridageModule { }
