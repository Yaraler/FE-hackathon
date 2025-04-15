import { Bridage } from "apps/bridage/src/bridage/entity/bridage.entity";
import { DailyWorkouts } from "apps/workouts/src/daily-workouts/entity/daily-workouts.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  name: string
  @Column()
  password: string
  @OneToOne(() => Bridage, bridage => bridage.user)
  bridage: Bridage;
  @OneToMany(() => DailyWorkouts, workout => workout.id)
  dailyWorkout: DailyWorkouts[];
}
