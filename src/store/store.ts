import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StoreI{
  hamburger: boolean;
  darkMode: string;
  userSetTheme: boolean;
  setHamburger: (status?: boolean) => void
  setDarkMode: (status: string) => void
  setUserSetTheme: (status:boolean) => void
}

export const useStore = create<StoreI>()(persist(
  ((set) => ({
    hamburger: false,
    darkMode: "light",
    userSetTheme: false,
    setHamburger: (status) => set((state) => ({ hamburger: status === false ? status : !state.hamburger })),
    setDarkMode: (status) => set(({ darkMode: status })),
    setUserSetTheme: (status) => set(({userSetTheme: status }))
  })), {
    name: "store",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        darkMode: state.darkMode,
        userSetTheme: state.userSetTheme
      })
  }
))