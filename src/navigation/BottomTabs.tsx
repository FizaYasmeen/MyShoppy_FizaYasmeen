import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import CategoryStack from "./CategoryStack";
import Colors from "../constants/colors";
import CartStack from "./Cart";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem("cartItems");

      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.log("Error loading cart:", error);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveCart = async (cart: any[]) => {
    try {
      await AsyncStorage.setItem(
        "cartItems",
        JSON.stringify(cart)
      );
    } catch (error) {
      console.log("Error saving cart:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveCart(cartItems);
    }
  }, [cartItems, isLoaded]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          left: 8,
          right: 8,
          bottom: 1,
          height: 60,
          paddingTop: 6,
          paddingBottom: 6,
          backgroundColor: Colors.white,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;

            case "Categories":
              iconName = "grid";
              break;

            case "Cart":
              iconName = "cart";
              break;

            default:
              iconName = "ellipse";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen name="Categories">
        {(props) => (
          <CategoryStack
            {...props}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        options={{
          tabBarBadge:
            cartItems.reduce(
              (total: number, item: any) => total + item.quantity,
              0
            ) || undefined,
        }}
      >
        {(props) => (
          <CartStack
            {...props}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabs;