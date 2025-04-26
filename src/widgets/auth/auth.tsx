import { AuthForm, AuthLink } from "@/features/auth"
import { AuthTitle } from "@/features/auth/ui/AuthTitle/AuthTitle"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { View } from "react-native"

export const Auth: React.FC<AuthProps> = ({ typePage }) => {

  return (
    <View>
      <AuthTitle text={typePage} />
      <AuthForm typePage={typePage} />
      <AuthLink typePage={typePage} />
    </View>
  )
}
