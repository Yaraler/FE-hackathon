import { ObjectId } from "mongodb"
import { IExercises } from "../user-indicators/ICheckingIndicator"



export interface ICreateWorkouts {
  name: string
  description: string
  userId: string
  exercisesId?: string[]


}
