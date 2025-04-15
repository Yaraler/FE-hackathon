import { DataSource } from 'typeorm';
import configuration from './config/configuration';
import { User } from 'src/user/entity/user.entity';
import { Bridage } from 'src/bridage/entity/bridage.entity';
import { DailyWorkouts } from 'src/daily-workouts/entity/daily-workouts.entity';
const config = configuration();
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: config.db_url,
        database: 'test',
        entities: [User, Bridage, DailyWorkouts],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

