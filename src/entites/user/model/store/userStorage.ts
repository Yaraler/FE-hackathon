import AsyncStorage from "@react-native-async-storage/async-storage"
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { IUser } from "../../type/IUser";

export interface IUserStore {
  user: undefined | IUser
  createUser: (accessToken: IUser) => void

}

const localMiddlewares = (f: StateCreator<IUserStore>) =>
  devtools(
    persist(f, {
      name: "userStorage",
      storage: createJSONStorage(() => AsyncStorage),
    })
  );

export const useUserStore = create<IUserStore>()(
  localMiddlewares((set) => ({
    user: undefined,
    createUser: (user: IUser) => {
      set(() => ({
        user: user,
      }));
    }
  }))
);

