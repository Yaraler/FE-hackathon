export interface IExercise {
  _id: string;
  exercise: string;
  imgUrl?: string
  name: string;
  state: boolean
  comment?: string //null
  count: string
  userCount?: number | null //null
}
