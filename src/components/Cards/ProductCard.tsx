import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Product {
    id: string;
    categoryId: string;
    name: string;
    image: any;
    price: number;
    rating: number;
    description: string;
}

interface ProductCardProps {
    product: Product;
    onAddToCart: () => void;
    onPress: () => void;
}

const ProductCard = ({ product, onAddToCart, onPress }: ProductCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <View style={styles.card}>
            <TouchableOpacity
                style={styles.favorite}
                onPress={() => setIsFavorite(!isFavorite)}
            >
                <Ionicons
                    name={isFavorite ? "heart" : "heart-outline"}
                    size={24}
                    color={isFavorite ? "red" : "gray"}
                />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
            >
                <Image
                    source={product.image}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text numberOfLines={1} style={styles.name}>
                    {product.name}
                </Text>
                <View style={styles.box}>
                    <Text style={styles.rating}>
                        ⭐ {product.rating}
                    </Text>
                    <Text style={styles.price}>
                        ${product.price}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={onAddToCart}
            >
                <Text style={styles.buttonText}>
                    Add to Cart
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
        backgroundColor: Colors.white,
        borderRadius: 18,
        padding: 12,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    image: {
        width: "100%",
        height: 140,
        marginVertical: 10
    },

    name: {
        fontSize: Fonts.body,
        fontWeight: "600",
        color: Colors.black,
        textAlign: "center",

    },

    box: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    rating: {
        marginTop: 5,
        color: Colors.grey
    },

    price: {
        fontSize: Fonts.subtitle,
        fontWeight: "bold",
        color: Colors.primary
    },

    button: {
        marginTop: 12,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: "center"
    },

    buttonText: {
        color: Colors.white,
        fontWeight: "600"
    },
    favorite: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
    },
});