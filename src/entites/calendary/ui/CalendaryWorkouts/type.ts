import { IWorkoutsResponse } from "@/shared/type/Workouts/WokroutsResponse/WorkoutsResponse";

export interface CalendaryWorkoutsProps {
  workouts: IWorkoutsResponse
  day: string
}
