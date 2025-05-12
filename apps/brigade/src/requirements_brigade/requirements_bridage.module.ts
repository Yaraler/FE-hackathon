import { Module } from '@nestjs/common';
import { requirementsBrigadeProviders } from './provider/requirements-brigade';
import { DatabaseModule } from '@libs/database/src';
import { RequirementsBrigadeService } from './requirements_bridage.service';
import { RequirementsBrigadeController } from './requirements_bridage.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [RequirementsBrigadeController],
  providers: [RequirementsBrigadeService, ...requirementsBrigadeProviders],
  exports: [RequirementsBrigadeService, ...requirementsBrigadeProviders],
})
export class RequirementsBrigadeModule { }
