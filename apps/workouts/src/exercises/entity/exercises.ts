import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("exercises")
export class Exercises {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  exercise: string
  @Column()
  name: string
  @Column()
  count: string
  @Column()
  userCount?: string
}

