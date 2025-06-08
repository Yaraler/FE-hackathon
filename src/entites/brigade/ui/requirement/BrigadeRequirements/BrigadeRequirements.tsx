import { View,StyleSheet } from "react-native"
import { BrigadeRequirementsProps } from "./type"
import { ItemBrigadeRequirement } from "../ItemBrigadeRequirement/ItemBrigadeRequirement"
import { IRequirement } from "@/entites/brigade/type/IRequirements"



type Props = BrigadeRequirementsProps & {
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  textStyle?: TextStyle;
  style?: ViewStyle;
};


export const BrigadeRequirements: React.FC<BrigadeRequirementsProps> = ({requirements, containerStyle,itemStyle, textStyle, style}) => {
  return (
      <View style={[styles.container, containerStyle,style]}> {/* Объединяем стили */}
        {requirements.map((data: IRequirement) => (
            <ItemBrigadeRequirement
                key={data._id}
                requirement={data}
                style={itemStyle}
                textStyle={textStyle}
            />
        ))}
      </View>

  )
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    paddingHorizontal: 15,
  },
})