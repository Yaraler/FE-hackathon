import { useRouter } from 'expo-router';
import { useAuthMutation } from "../../api/useMutation";
import { IAuthVariables, IAuthVariablesHook } from "../../type/IAuthVariables";
import { useTokenStore } from '@/processes/tokenStorage/tokenStorage';



export const useAuth = () => {
  const authMutation = useAuthMutation()
  const router = useRouter();
  const { createToken } = useTokenStore()
  const handlerAuth = async ({ body, typePage, handlerZeroPage }: IAuthVariablesHook) => {
    try {
      const response = await authMutation.mutateAsync({ body, typePage })
      createToken(response)
      router.navigate('/main')
    } catch (e) {
      handlerZeroPage()
      console.error(e)
    }
  }
  return {
    ...authMutation, handlerAuth
  }
}
