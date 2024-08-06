import 'react-native-get-random-values'
import Welcome from "@/components/Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {

  const router = useRouter()

  useEffect(() => {

    const CheckLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("auth");

        if (token) {
          router.replace("/(tabs)/home")
        } else {
          router.replace("/(auth)/login")

        }
      } catch (error) {
        console.log("Error", error);
      }
    }

    CheckLoginStatus()
  }, [])


  return (
    <>

    </>

    // <Welcome />
  );
}
