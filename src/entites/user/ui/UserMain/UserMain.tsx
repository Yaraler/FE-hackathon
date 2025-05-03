import { Text, View } from "react-native"
import { UserIcon } from "../UserIcon/UserIcon"
import { useGetUser } from "../../model/hook/useGetUser"
import { useUserStore } from "../../model/store/userStorage"
import { UserName } from "../UserName/UserName"

export const UserMain = () => {
  const { user } = useUserStore()
  if (!user) return <Text>load</Text>
  return (
    <View>
      <UserIcon icon={user?.icon} />
      <View>
        <UserName name={user.name} />
        <Text>team</Text>
      </View>
    </View>
  )
}
