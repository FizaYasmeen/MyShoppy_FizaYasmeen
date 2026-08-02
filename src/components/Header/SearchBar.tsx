import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search ...",
}: SearchBarProps) => {
  return (
    <View style={styles.container}>

      <Ionicons
        name="search"
        size={22}
        color={Colors.grey}
      />

      <TextInput
        placeholderTextColor={Colors.grey}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({

  container: {
    marginHorizontal: 12,
    marginVertical: 12,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: Fonts.body,
    color: Colors.black,
  },

});