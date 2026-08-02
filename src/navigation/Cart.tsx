import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/CartScreen";
import CustomerDetailsScreen from "../screens/CustomerDetailsScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";

const Stack = createNativeStackNavigator();

const CartStack = ({ cartItems, setCartItems }: any) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartMain">
        {(props) => (
          <CartScreen
            {...props}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="CustomerDetails">
        {(props) => (
          <CustomerDetailsScreen
            {...props}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="OrderSuccess">
        {(props) => (
          <ConfirmationScreen
            {...props}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default CartStack;