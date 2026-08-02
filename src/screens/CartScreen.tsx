import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header/Header";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import Spacing from "../constants/spacing";
import CartItem from "../components/Cards/CartItem";
import { Alert } from "react-native";

const CartScreen = ({ cartItems, setCartItems, navigation }: any) => {

    const increaseQuantity = (id: string) => {
        const updatedCart = cartItems.map((item: any) =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        );

        setCartItems(updatedCart);
    };

    const decreaseQuantity = (id: string) => {
        const updatedCart = cartItems
            .map((item: any) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            )
            .filter((item: any) => item.quantity > 0);

        setCartItems(updatedCart);
    };

    const totalPrice = cartItems.reduce(
        (sum: number, item: any) =>
            sum + item.price * item.quantity,
        0
    );

    const handleRemoveItem = (id: string, name: string) => {
        Alert.alert(
            "Remove Item",
            `Are you sure you want to remove "${name}" from your cart?`,
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Remove",
                    style: "destructive",
                    onPress: () => {
                        const updatedCart = cartItems.filter(
                            (item: any) => item.id !== id
                        );

                        setCartItems(updatedCart);
                    },
                },
            ]
        );
    };

    return (
        <View style={GlobalStyles.container}>
            <Header />
            <View style={styles.box}>
            <Text style={styles.heading}>My Cart</Text>

            <Text style={styles.subHeading}>
                Review Item And Shipping
            </Text>
            </View>

            {cartItems.length === 0 ? (

                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                        Your cart is empty.
                    </Text>
                </View>

            ) : (

                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.list}
                        renderItem={({ item }) => (
                            <CartItem
                                item={item}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                removeItem={handleRemoveItem}
                            
                            />
                            
                        )}
                    />

                    <View style={styles.summary}>

                        <View style={styles.row}>
                            <Text style={styles.totalText}>Total</Text>
                            <Text style={styles.totalText}>
                                $ {totalPrice.toFixed(2)}
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.orderButton}
                            onPress={() => {
                                setCartItems([]);
                                navigation.navigate("CustomerDetails", {
                                    cartItems,
                                    totalPrice,
                                });
                            }}
                        >
                            <Text style={styles.orderText}>
                                Add Order Details
                            </Text>
                        </TouchableOpacity>

                    </View>

                </>

            )}

        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({

    heading: {
        fontSize: Fonts.title,
        fontWeight: "bold",
        marginHorizontal: Spacing.md,
        marginLeft: Spacing.sm,
        textAlign:"auto"
    },

    subHeading: {
        fontSize: Fonts.body,
        color: Colors.grey,
        marginHorizontal: Spacing.sm,
        marginBottom: Spacing.sm,
    },
    box:{
       justifyContent:"flex-start",
       alignItems:"flex-start",
    },

    list: {
        paddingHorizontal: Spacing.md,
    },

    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    emptyText: {
        fontSize: Fonts.body,
        color: Colors.grey,
    },

    summary: {
        backgroundColor: Colors.white,
        position: "static",
        height:200,
        marginBottom: Spacing.md,
        borderRadius: 12,
        padding: Spacing.md,
        elevation: 2,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 6,
    },

    totalText: {
        fontWeight: "bold",
        fontSize: Fonts.body,
    },

    orderButton: {
        marginTop: Spacing.md,
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },

    orderText: {
        color: Colors.white,
        fontSize: Fonts.body,
        fontWeight: "bold",
    },

});