import React from "react";
import { View } from "react-native";
import Header from "../components/Header/Header";
import GlobalStyles from "../constants/GlobalStyles";
import SearchBar from "../components/Header/SearchBar";
import BannerCarousel from "../components/Home/BannerCarousel";

const HomeScreen = () => {
  return (
    <View style={GlobalStyles.container}>
      <Header />
      <SearchBar/>
      <BannerCarousel />
    </View>
  );
};

export default HomeScreen;