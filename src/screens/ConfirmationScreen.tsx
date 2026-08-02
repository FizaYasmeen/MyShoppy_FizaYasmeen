import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import Spacing from "../constants/spacing";
import GlobalStyles from "../constants/GlobalStyles";

const ConfirmationScreen = ({ navigation }: any) => {
    return (
        <View style={[GlobalStyles.container, styles.container]}>

            <Ionicons
                name="checkmark-circle"
                size={120}
                color={Colors.success}
            />

            <Text style={styles.title}>
                Order Placed Successfully!
            </Text>

            <Text style={styles.message}>
                Thank you for shopping with MyShoppy.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: "MainTabs", 
                            },
                        ],
                    })}>
                <Text style={styles.buttonText}>
                    Continue Shopping
                </Text>
            </TouchableOpacity>

        </View>
    );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: Spacing.lg,
    },

    title: {
        fontSize: Fonts.title,
        fontWeight: "bold",
        marginTop: Spacing.lg,
    },

    message: {
        fontSize: Fonts.body,
        color: Colors.grey,
        marginTop: Spacing.sm,
        textAlign: "center",
        marginBottom: Spacing.xl,
    },

    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 10,
    },

    buttonText: {
        color: Colors.white,
        fontWeight: "bold",
        fontSize: Fonts.body,
    },

});