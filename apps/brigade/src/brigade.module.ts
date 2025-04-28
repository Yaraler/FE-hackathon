import { Module } from '@nestjs/common';
import { DatabaseModule } from '@libs/database/src';
import { RequirementsBrigadeModule } from './requirements_brigade/requirements_bridage.module';
import { BrigadeModule } from './brigade/brigade.module';

@Module({
  imports: [RequirementsBrigadeModule, BrigadeModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class BrigadeModuleApp { }
