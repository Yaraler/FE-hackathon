export interface IWorkouts {
  _id: string;
  name: string;
  description: string;
  day: string;
  state: boolean;
  userComment: string | null;//null
  commentToDay: string | null;//null
  exercisesId: string[];
  userId: string;
}

