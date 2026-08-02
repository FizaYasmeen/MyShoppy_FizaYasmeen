import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import Spacing from "../constants/spacing";
import Header from "../components/Header/Header";


const CustomerDetailsScreen = ({ navigation, route, setCartItems }: any) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        address: "",
    });
    const { cartItems = [], totalPrice = 0 } = route.params || {};

    const totalItems = cartItems.reduce(
        (sum: number, item: any) => sum + item.quantity,
        0
    );

    const handleSubmit = () => {
        const newErrors = {
            name: "",
            phone: "",
            address: "",
        };

        let isValid = true;

        if (name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters.";
            isValid = false;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            newErrors.phone = "Enter a valid 10-digit mobile number.";
            isValid = false;
            console.log("Phone:", phone);
            console.log("Length:", phone.length);
        }

        if (address.trim().length < 10) {
            newErrors.address = "Address must be at least 10 characters.";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            setCartItems([]);
            navigation.replace("OrderSuccess");
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.heading}>Customer Details</Text>
                <Text style={styles.label}>Customer Name</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                />

                {errors.name ? (
                    <Text style={styles.errorText}>{errors.name}</Text>
                ) : null}

                <Text style={styles.label}>Contact Number</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your contact number"
                    keyboardType="number-pad"
                    maxLength={10}
                    value={phone}
                    onChangeText={setPhone}
                />

                {errors.phone ? (
                    <Text style={styles.errorText}>{errors.phone}</Text>
                ) : null}

                <Text style={styles.label}>Delivery Address</Text>

                <TextInput
                    style={[styles.input, styles.address]}
                    placeholder="Enter your complete address"
                    multiline
                    value={address}
                    onChangeText={setAddress}
                />

                {errors.address ? (
                    <Text style={styles.errorText}>{errors.address}</Text>
                ) : null}

                <View style={styles.summaryCard}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Total Items</Text>
                        <Text style={styles.summaryValue}>{totalItems}</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Total Amount</Text>
                        <Text style={styles.summaryValue}>
                            ${totalPrice.toFixed(2)}
                        </Text>
                    </View>
                </View>
                <View style={{ height: 90 }} />
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default CustomerDetailsScreen;

const styles = StyleSheet.create({

    scrollContainer: {
        padding: Spacing.lg,
        paddingBottom: 20,
    },

    heading: {
        fontSize: Fonts.title,
        fontWeight: "bold",
        marginBottom: Spacing.md,
    },

    label: {
        fontSize: Fonts.body,
        marginBottom: 6,
        fontWeight: "600",
    },

    input: {
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 10,
        padding: 12,
        marginBottom: Spacing.md,
        fontSize: Fonts.body,
        backgroundColor: Colors.white,
    },

    address: {
        height: 80,
        textAlignVertical: "top",
    },

    button: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: "center",
    },

    buttonText: {
        color: Colors.white,
        fontWeight: "bold",
        fontSize: Fonts.subtitle,
    },
    summaryCard: {
        backgroundColor: Colors.white,
        padding: Spacing.md,
        borderRadius: 10,
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
    },

    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },

    summaryLabel: {
        fontSize: Fonts.body,
        color: Colors.black,
    },

    summaryValue: {
        fontSize: Fonts.body,
        fontWeight: "bold",
        color: Colors.black,
    },
    errorText: {
        color: Colors.danger,
        marginTop: -12,
        marginBottom: Spacing.md,
        fontSize: 12,
    },
    footer: {
        position: "absolute",
        height: 100,
        marginTop: 490,
        left:0,
        right:0,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.md,
    },

});