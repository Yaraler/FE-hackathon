import { DataSource } from 'typeorm';
import { DailyWorkouts } from 'apps/workouts/src/daily-workouts/entity/daily-workouts.entity';
import { User } from 'apps/users/src/user/entity/user.entity';
import configuration from './config/configuration';
import { Brigade } from 'apps/brigade/src/brigade/entity/brigade.entity';
import { RequirementsBrigade } from 'apps/brigade/src/requirements_brigade/entity/requirements-brigade.entity';
import { Exercises } from 'apps/workouts/src/exercises/entity/exercises';
const config = configuration();
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: config.db_url,
        database: 'test',
        entities: [User, Brigade, DailyWorkouts, RequirementsBrigade, Exercises],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

