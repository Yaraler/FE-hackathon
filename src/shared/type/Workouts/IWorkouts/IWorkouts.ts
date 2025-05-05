export interface IWorkouts {
  _id: string;
  name: string;
  description: string;
  day: string;
  state: boolean;
  userComment: string | null;
  commentToDay: string | null;
  exercisesId: string[];
  userId: string;
}

