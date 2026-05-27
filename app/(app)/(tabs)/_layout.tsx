import { StyleSheet, View } from "react-native"
import { Tabs } from "expo-router"

import { AppTabBar } from "@/components/navigation"
import { colors } from "@/theme"

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        sceneStyle: { backgroundColor: colors.background.app },
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: colors.background.app,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarBackground: () => (
          <View
            style={[StyleSheet.absoluteFill, styles.tabBarBackground]}
          />
        ),
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="wallets" options={{ title: "Wallets" }} />
      <Tabs.Screen name="convert" options={{ title: "Convert" }} />
      <Tabs.Screen name="account" options={{ title: "Account" }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tabBarBackground: {
    backgroundColor: colors.background.app,
  },
})
