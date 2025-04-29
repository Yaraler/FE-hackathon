import { User } from "apps/users/src/user/entity/user.entity";
import { Column, Entity, ObjectIdColumn, OneToMany, } from "typeorm";
import { ObjectId } from "mongodb";



@Entity("brigade")
export class Brigade {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  name: string
  @Column()
  description: string
  @Column()
  image?: string
  @Column()
  requirementsBrigadeIds: string[];
}
