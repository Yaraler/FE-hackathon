import { Column, Entity, ManyToOne, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Bridage } from "../../bridage/entity/bridage.entity";
import { ObjectId } from "mongodb";

@Entity("requirements-bridage")
export class RequirementsBridage {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  exercise: string
  @Column({ nullable: true })
  minimum?: number;
  @Column({ nullable: true })
  maximum?: number;
  @ManyToOne(() => Bridage, bridage => bridage.bridage_requiremets)
  bridage: Bridage;
}

