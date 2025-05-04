import { Injectable } from '@nestjs/common';
import { BrigadeService } from 'apps/brigade/src/brigade/brigade.service';
import { UserService } from 'apps/users/src/user/user.service';
import { AiRouterService } from 'shared/lib/ai-router/ai-router.service';

@Injectable()
export class UserIndicatorsService {
  constructor(
    private readonly aiRouterService: AiRouterService,
    private readonly userService: UserService,
    private readonly brigadeService: BrigadeService

  ) { }
  async createCheckingIndicators(idUser: string) {
    try {

      const user = await this.userService.findById(idUser)
      const brigade = await this.brigadeService.getOneBrigade(user.brigadeId)


    } catch (error) {
      throw error;
    }
  }


}
