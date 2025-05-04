import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { RequirementsBrigade } from 'apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity';
import { IExercises } from '@libs/contracts/user-indicators/ICheckingIndicator';


@Injectable()
export class AiRouterService {
  private apiOpenRouterConfig: any;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.apiOpenRouterConfig = this.configService.get('open-router');
  }
  private async request<T>(promt: string,): Promise<T[]> {
    try {
      const res = await lastValueFrom(
        this.httpService.post('http://localhost:11434/api/generate',
          {
            "model": "mistral",
            "prompt": `${promt}`,
            "stream": false
          },
        ))

      const responseString = res.data.response;

      try {
        const res = JSON.parse(responseString);
        return res
      } catch (e) {
        throw new e
      }
    } catch (error) {
      throw error;
    }
  }

  async createFirstWorkoutsCheckingIndicators(requirements: RequirementsBrigade): Promise<IExercises[]> {
    try {
      const promt = `
         Проведи оцінку фізичних показників користувача згідно з вимогами:
         
         ${requirements}
         
         Для кожної вправи запитай у користувача відповідне значення. Формат запитань:
         - "Скільки хвилин вам потрібно, щоб пробігти 3 км?"
         - "Скільки віджимань ви можете зробити?"
         - "Скільки хвилин ви можете тримати планку?"
         
         Поверни лише JSON-масив у форматі:
         
         [
           {
             "exercise": "Назва вправи",
             "name": "Назва вправи для користувача (наприклад, скільки віджимань зможете зробити)",
             "count": "середні показники"
           }
         ]
         
         Не додавай жодних пояснень. Поверни лише масив. Це буде використовуватись для створення персонального плану тренувань.
      `
      const res = await this.request<IExercises>(promt)
      return res
    } catch (error) {
      throw error;
    }

  }
}
