import { User } from "src/user/entity/user.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class DailyWorkouts {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => User, user => user.id)
  user: User
}
