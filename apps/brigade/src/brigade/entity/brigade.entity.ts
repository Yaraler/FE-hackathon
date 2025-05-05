import { User } from "apps/users/src/user/entity/user.entity";
import { Column, Entity, ObjectIdColumn, OneToMany, } from "typeorm";
import { ObjectId } from "mongodb";
import { Expose } from "class-transformer";



@Entity("brigade")
export class Brigade {
  @ObjectIdColumn()
  @ObjectIdColumn()
  @Expose()
  _id: ObjectId;
  @Column()
  name: string
  @Column()
  description: string
  @Column()
  image?: string
  @Column()
  shortName?: string
  @Column()
  requirementsBrigadeIds: string[];
}
