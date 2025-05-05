export interface IExercise {
  _id: string;
  exercise: string;
  imgUrl?: string
  name: string;
  count?: string | null;
  userCount?: number | null;
}
