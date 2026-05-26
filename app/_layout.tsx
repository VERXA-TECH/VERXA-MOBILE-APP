import "../global.css"
import { useEffect } from "react"
import { Slot } from "expo-router"
import * as SplashScreen from "expo-splash-screen"

import { useAppFonts } from "@/hooks/useAppFonts"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const fontsLoaded = useAppFonts()

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return <Slot />
}
