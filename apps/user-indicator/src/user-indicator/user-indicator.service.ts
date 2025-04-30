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
      console.log("worker")

      const user = await this.userService.findById(idUser)
      const brigade = await this.brigadeService.getOneBrigade(user.brigadeId)
      console.log("afa")
      const res = await this.aiRouterService.createCheckingIndicators(brigade.requirements)


      return res
    } catch (error) {
      throw error;
    }
  }

}
