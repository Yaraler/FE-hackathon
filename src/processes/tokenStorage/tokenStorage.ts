import { AuthResponse } from "@/features/auth/api/type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface ITokenStore {
  refreshToken: string | undefined
  accessToken: string | undefined
  changeAccessToken: (accessToken: string) => void
  changeRefreshToken: (refreshToken: string) => void
  createToken: ({ accessToken, refreshToken }: AuthResponse) => void

}

const localMiddlewares = (f: StateCreator<ITokenStore>) =>
  devtools(
    persist(f, {
      name: "tokenStorage",
      storage: createJSONStorage(() => AsyncStorage),
    })
  );

export const useTokenStore = create<ITokenStore>()(
  localMiddlewares((set) => ({
    refreshToken: undefined,
    accessToken: undefined,
    changeRefreshToken: (refreshToken: string) => {
      set(() => ({
        refreshToken: refreshToken,
      }));
    },
    changeAccessToken: (accessToken: string) => {
      set(() => ({
        accessToken: accessToken,
      }));
    },
    createToken: ({ accessToken, refreshToken }: AuthResponse) => {
      set(() => ({
        accessToken: accessToken,
        refreshToken: refreshToken,

      }));
    }

  }))
);
