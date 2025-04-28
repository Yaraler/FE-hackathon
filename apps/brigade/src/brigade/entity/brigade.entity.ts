import { User } from "apps/users/src/user/entity/user.entity";
import { Column, Entity, ObjectIdColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectId } from "mongodb";
import { RequirementsBrigade } from "../../requirements_brigade/entity/requirements-brigade.entity";



@Entity("brigade")
export class Brigade {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  name: string
  @Column()
  description: string
  @OneToMany(() => User, user => user.brigade)
  users: User[];
  image?: string
}

