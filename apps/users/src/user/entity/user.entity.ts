import { DailyWorkouts } from "apps/workouts/src/daily-workouts/entity/daily-workouts.entity";
import { Column, Entity, ManyToOne, ObjectIdColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectId } from 'mongodb';

@Entity('users')
export class User {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  email: string;
  @Column()
  name: string
  @Column()
  password: string
  @Column()
  brigadeId: string
  @OneToMany(() => DailyWorkouts, workout => workout._id)
  dailyWorkout: DailyWorkouts[];
  @Column()
  refreshToken: string;
}
