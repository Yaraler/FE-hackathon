export interface IUser {
  _id: string;
  email: string;
  name: string
  password: string
  brigadeId: string
  DailyWorkoutsIds?: string[];
  FirstWorkoutICheckndicatorId?: string
  icon?: string
  state: boolean
  refreshToken: string;
}
