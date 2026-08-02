import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.logo} >
          MyShoppy
        </Text>
      </View>
    </SafeAreaView >
  );
};

export default Header;

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.white,
    padding: 2,
    elevation: 1
  },

  logo: {
    fontSize: Fonts.heading,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'italic'
  }

});