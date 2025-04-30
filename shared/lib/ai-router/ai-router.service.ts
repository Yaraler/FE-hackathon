import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { Brigade } from 'apps/brigade/src/brigade/entity/brigade.entity';
import { RequirementsBrigade } from 'apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity';


@Injectable()
export class AiRouterService {
  private apiOpenRouterConfig: any;
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.apiOpenRouterConfig = this.configService.get('open-router');
  }
  private async request(promt: string, type: string): Promise<string> {
    try {
      console.log(this.apiOpenRouterConfig.token)
      const res = await lastValueFrom(
        this.httpService.post('https://openrouter.ai/api/v1/completions',
          {
            "model": "deepseek/deepseek-r1:free",
            "prompt": `${promt}`,
            "response_format": { "type": `${type}` }
          },
          {
            headers: {
              Authorization: `Bearer ${this.apiOpenRouterConfig.token}`,
            },
          }))
      if (Array.isArray(res.data.choices) && res.data.choices.length > 0 && res.data.choices[0].text) {
        console.log(res.data.choices[0].text)
        return res.data.choices.text
      }
      console.log(res.data)

      return ""
    } catch (error) {
      throw error;
    }
    //json_object
    //Верни ТОЛЬКО массив JSON без пояснений. Составь базовый недельный план тренировок для новичка весом 80 кг, который хочет похудеть и улучшить физическую форму. Упражнения должны быть умеренными, с акцентом на кардио и простые силовые с собственным весом. Формат: [{\"name\": \"Название\", \"count\": \"X минут/повторений\"}, ...]
  }
  async createCheckingIndicators(requirements: RequirementsBrigade) {
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
      const res = await this.request(promt, "json_object")
      return res
    } catch (error) {
      throw error;
    }

  }
}
