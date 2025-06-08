import { StyleSheet, Text, View } from "react-native"
import { BrigadeSelectorCardprops } from "./type"
import { CardBrigade } from "../CardBrigade/CardBrigade"
import { IBrigade } from "../../type/IBirgade"

export const BrigadeSelectorCard: React.FC<BrigadeSelectorCardprops> = ({ brigades, handlerBrigadeInfo }) => {
  return (
    <View style={styles.container}>
      {brigades?.map((elem: IBrigade) => (
        <CardBrigade brigade={elem} key={elem._id} handler={() => handlerBrigadeInfo(elem)} />
      ))}
    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    height: "80%"
  }
})
