import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../components/Header/Header";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import Spacing from "../constants/spacing";

const ProductDetailsScreen = ({
  navigation,
  route,
  cartItems,
  setCartItems,
}: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { product } = route.params;

  const onAddToCart = () => {
    const existingItem = cartItems.find(
      (item: any) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item: any) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    navigation.navigate("Cart");
  };

  return (
    <View style={GlobalStyles.container}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.topRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="arrow-back"
              size={28}
              color={Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Ionicons
              name={
                isFavorite
                  ? "heart"
                  : "heart-outline"
              }
              size={26}
              color={
                isFavorite
                  ? "red"
                  : "gray"
              }
            />
          </TouchableOpacity>
        </View>

        <Image
          source={product.image}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.rating}>
          ⭐ {product.rating}
        </Text>

        <Text style={styles.price}>
          ${product.price}
        </Text>

        <Text style={styles.heading}>
          Description
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>
        <Text style={styles.heading}>
          Availability
        </Text>

        <Text style={styles.description}>
          {product.availability}
        </Text>
        

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onAddToCart}
        >
          <Text style={styles.buttonText}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({

  scrollContainer: {
    padding: Spacing.md,
    paddingBottom: 120,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },

  name: {
    fontSize: Fonts.title,
    fontWeight: "700",
    color: Colors.black,
  },

  rating: {
    marginTop: 8,
    fontSize: Fonts.body,
    color: Colors.grey,
  },

  price: {
    marginTop: 8,
    fontSize: 28,
    color: Colors.primary,
    fontWeight: "bold",
  },

  heading: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: Fonts.subtitle,
    fontWeight: "700",
    color: Colors.black,
  },

  description: {
    fontSize: Fonts.body,
    color: Colors.grey,
    lineHeight: 24,
  },

  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 60,
    padding: Spacing.sm,
  },

  button: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",

  },

  buttonText: {
    color: Colors.white,
    fontSize: Fonts.body,
    fontWeight: "700",
  },

});
