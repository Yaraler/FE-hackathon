import { IBrigade } from "../../type/IBirgade";


export interface CardBrigadeProps {
  brigade: IBrigade
  handler: (id: string) => void
}
