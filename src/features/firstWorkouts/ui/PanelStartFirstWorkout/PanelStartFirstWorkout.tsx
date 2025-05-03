import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { Text, View } from "react-native"


export const PanelStartFirstWorkout = () => {
  return (
    <View>
      <Text>
        Start your first workout
      </Text>
      <Text>
        For start your way to the solider. We need  check your physical ....
      </Text>
      <ItemButton title="Start" handleSubmit={() => null} />
    </View>
  )
}
