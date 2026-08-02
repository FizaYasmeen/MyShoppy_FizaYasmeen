import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <SafeAreaProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
      />
    </Stack.Navigator>
    </SafeAreaProvider>
  );
}