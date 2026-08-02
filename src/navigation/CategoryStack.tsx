import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

const CategoryStack = ({
    cartItems,
    setCartItems,
}: any) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="CategoriesMain"
                component={CategoryScreen}
            />

            <Stack.Screen name="Products">
                {(props) => (
                    <ProductScreen
                        {...props}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                )}
            </Stack.Screen>

            <Stack.Screen name="ProductDetails">
                {(props) => (
                    <ProductDetailsScreen
                        {...props}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                )}
            </Stack.Screen>

        </Stack.Navigator>
    );
};

export default CategoryStack;