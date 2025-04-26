import { ExternalPathString } from "expo-router"
import { IAuthLink } from "../type";


export const loginLinkData: IAuthLink = {
  text: "Sign in",
  link: "/auth/login" as ExternalPathString
}

export const registrationLinkData: IAuthLink = {
  text: "Sign up",
  link: "/auth/registration" as ExternalPathString
}
