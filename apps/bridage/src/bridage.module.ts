import { Module } from '@nestjs/common';
import { RequirementsBridageModule } from './requirements_bridage/requirements_bridage.module';
import { DatabaseModule } from '@libs/database/src';

@Module({
  imports: [RequirementsBridageModule, BridageModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class BridageModule { }
