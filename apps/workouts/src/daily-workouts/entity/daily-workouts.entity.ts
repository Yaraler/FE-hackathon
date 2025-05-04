import { User } from "apps/users/src/user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, ObjectIdColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exercises } from "../../exercises/entity/exercises";
import { ObjectId } from "mongodb";

@Entity()
export class DailyWorkouts {
  @ObjectIdColumn()
  _id: string;
  @Column()
  name: string
  @Column()
  description: string
  @Column({ default: new Date() })
  day: Date;
  @Column({ default: false })
  state: boolean
  @Column()
  userComment?: string
  @Column()
  commentToDay?: string
  @Column(() => Exercises)
  exercisesId?: string[]
  @Column(() => User)
  userId: ObjectId
}
