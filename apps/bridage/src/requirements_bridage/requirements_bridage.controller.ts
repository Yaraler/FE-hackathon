import { Controller } from '@nestjs/common';
import { RequirementsBridageService } from './requirements_bridage.service';

@Controller('requirements-bridage')
export class RequirementsBridageController {
  constructor(private readonly requirementsBridageService: RequirementsBridageService) {}
}
