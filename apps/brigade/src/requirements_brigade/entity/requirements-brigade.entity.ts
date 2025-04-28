import { Column, Entity, JoinColumn, ManyToOne, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { ObjectId } from "mongodb";
import { Brigade } from "../../brigade/entity/brigade.entity";

@Entity("requirements-brigade")
export class RequirementsBrigade {
  @ObjectIdColumn()
  _id: ObjectId;
  @Column()
  exercise: string
  @Column({ nullable: true })
  minimum?: number;
  @Column({ nullable: true })
  maximum?: number;
  @ManyToOne(() => Brigade)
  @JoinColumn({ name: 'brigadeId' })
  brigadeId: string;
}

