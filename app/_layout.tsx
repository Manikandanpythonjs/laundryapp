import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Tabs } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Light": require("../assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-CSemiBold": require("../assets/fonts/OpenSans_SemiCondensed-Medium.ttf"),
    "OpenSans-Medium": require("../assets/fonts/OpenSans-Medium.ttf"),
    "Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),

  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>

      <Stack>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }} />
        <Stack.Screen name="(auth)" options={{
          headerShown: false
        }} />
      </Stack>
      <StatusBar animated networkActivityIndicatorVisible translucent style="auto" />





    </>
  );
}
