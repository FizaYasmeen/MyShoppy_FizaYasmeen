import React, { useEffect, useState, useMemo } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Header from "../components/Header/Header";
import SearchBar from "../components/Header/SearchBar";
import GlobalStyles from "../constants/GlobalStyles";
import CategoryCard from "../components/Cards/CategoryCard";
import { categoryMap } from "../utils/categoryMap";
import { API_BASE_URL } from "../config/api";

interface Category {
  id: string;
  title: string;
  image: string;
}

const CategoryScreen = ({ navigation }: any) => {

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching from:", `${API_BASE_URL}/categories`);
        const response = await fetch(`${API_BASE_URL}/categories`);
        console.log("Status:", response.status);
        const data = await response.json();
        console.log("Categories:", data);
        setCategories(data);
      } catch (error) {
        console.log("Product Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = useMemo(() => {
  return categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [categories, searchQuery]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }


  return (
    <View style={GlobalStyles.container}>
      <Header />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search categories..."
      />

      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            image={categoryMap[item.image]}
            onPress={() =>
              navigation.navigate("Products", {
                category: item,
              })
            }
          />
        )}
      />

    </ View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  list: {
    padding: 10,
    paddingBottom: 30,
  },
});