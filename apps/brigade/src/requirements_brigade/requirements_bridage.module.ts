import { Module } from '@nestjs/common';
import { requirementsBrigadeProviders } from './provider/requirements-brigade';
import { RequirementsBrigadeService } from './requirements_bridage.service';
@Module({
  providers: [RequirementsBrigadeService, ...requirementsBrigadeProviders],
  exports: [RequirementsBrigadeService, ...requirementsBrigadeProviders],
})
export class RequirementsBrigadeModule { }
