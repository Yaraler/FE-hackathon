import { User } from "src/user/entity/user.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Bridage {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => User, user => user.bridage)
  user: User;
}

