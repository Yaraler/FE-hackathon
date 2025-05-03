import { View } from "react-native"
import { BrigadeRequirementsProps } from "./type"
import { ItemBrigadeRequirement } from "../ItemBrigadeRequirement/ItemBrigadeRequirement"
import { IRequirement } from "@/entites/brigade/type/IRequirements"

export const BrigadeRequirements: React.FC<BrigadeRequirementsProps> = ({ requirements }) => {
  return (
    <View>
      {
        requirements.map((data: IRequirement) => <ItemBrigadeRequirement key={data._id} requirement={data} />)
      }

    </View>
  )
}
