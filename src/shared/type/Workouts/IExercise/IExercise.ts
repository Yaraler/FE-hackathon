export interface IExercise {
  _id: string;
  exercise: string;
  imgUrl?: string
  name: string;
  state: boolean
  comment?: string
  count?: string | null;
  userCount?: number | null;
}
