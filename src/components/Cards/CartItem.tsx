import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import Spacing from "../../constants/spacing";
import { Ionicons } from "@expo/vector-icons";

interface CartItemProps {
  item: any;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string, name: string) => void;
}

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}: CartItemProps) => {
  return (
    <View style={styles.card}>

      <Image
        source={item.image}
        style={styles.image}
      />

      <View style={styles.details}>

        <Text style={styles.name}>
          {item.name}
        </Text>
        <View style={styles.quantityContainer}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => decreaseQuantity(item.id)}
          >
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>
            {item.quantity}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => increaseQuantity(item.id)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>
            ${item.price}
          </Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeItem(item.id, item.name)}
          >
            <Ionicons
              name="trash-outline"
              size={20}
              color={Colors.danger}
            />

            <Text style={styles.removeText}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>

      </View>


    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({

  card: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    marginBottom: Spacing.md,
    padding: Spacing.md,
    borderRadius: 12,
    elevation: 2,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  details: {
    flex: 1,
    marginLeft: Spacing.md,
    justifyContent: "space-between",
  },

  name: {
    fontSize: Fonts.subtitle,
    fontWeight: "600",
  },

  color: {
    color: Colors.grey,
    marginTop: 5,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },

  button: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  quantity: {
    marginHorizontal: 18,
    fontSize: Fonts.subtitle,
    fontWeight: "bold",
  },

  price: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: Fonts.subtitle,
    marginTop: 4
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  removeText: {
    marginLeft: 6,
    color: Colors.danger,
    fontWeight: "600",
  },

});