import { User } from "apps/users/src/user/entity/user.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RequirementsBridage } from "../../requirements_bridage/entity/requirements-bridage.entity";
import { ObjectId } from "mongodb";



@Entity("bridage")
export class Bridage {
  @PrimaryGeneratedColumn()
  _id: ObjectId;
  @Column()
  name: string
  @Column()
  description: string
  @OneToMany(() => User, user => user.bridage)
  users: User[];
  @OneToMany(() => RequirementsBridage, requirementsBridage => requirementsBridage.bridage)
  bridage_requiremets: RequirementsBridage[];
}

