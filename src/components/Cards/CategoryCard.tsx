import React from "react";
import {Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

interface CategoryCardProps {
  title: string;
  image: any;
  onPress: () => void;
}

const CategoryCard = ({title, image, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.white,
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 18,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  image: {
    width: 200,
    height: 100,
    marginBottom: 12,
  },

  title: {
    fontSize: Fonts.body,
    fontWeight: "600",
    color: Colors.black,
  },
});