


export interface IPosition {
  alight: "center" | "end" | "start"
  justify: "center" | "end" | "start"
  direction: "row" | "row-reverse" | "column" | "column-reverse"
}
export const Position = ({ alight = "center", justify = "center" }: IPosition, direction = "row") => {
  return {
    display: "flex",
    alightImtes: alight,
    justifyContent: justify,
    flexDirection: direction
  }
}
