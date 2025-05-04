import { forwardRef, Module } from '@nestjs/common';
import { requirementsBrigadeProviders } from './provider/requirements-brigade';
import { DatabaseModule } from '@libs/database/src';
import { BrigadeModule } from '../brigade/brigade.module';
import { RequirementsBrigadeService } from './requirements_bridage.service';
import { RequirementsBrigadeController } from './requirements_bridage.controller';
import { brigadeProviders } from '../brigade/provider/brigade';
@Module({
  imports: [DatabaseModule,
    forwardRef(() => BrigadeModule)
  ],
  controllers: [RequirementsBrigadeController],
  providers: [RequirementsBrigadeService, ...requirementsBrigadeProviders, ...brigadeProviders],
  exports: [RequirementsBrigadeService, ...requirementsBrigadeProviders],
})
export class RequirementsBrigadeModule { }
