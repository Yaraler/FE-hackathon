import { Text, View } from "react-native"
import { BrigadeSelectorCardprops } from "./type"
import { CardBrigade } from "../CardBrigade/CardBrigade"
import { IBrigade } from "../../type/IBirgade"

export const BrigadeSelectorCard: React.FC<BrigadeSelectorCardprops> = ({ brigades, handlerBrigadeInfo }) => {
  return (
    <View>
      <Text>selec</Text>
      {brigades?.map((elem: IBrigade) => (
        <CardBrigade brigade={elem} key={elem._id} handler={() => handlerBrigadeInfo(elem)} />
      ))}
    </View>


  )
}
