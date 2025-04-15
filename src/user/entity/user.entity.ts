import { Bridage } from "src/bridage/entity/bridage.entity";
import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Bridage, bridage => bridage.user)
  bridage: Bridage;

}
