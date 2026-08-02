import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Modal } from "react-native";
import Header from "../components/Header/Header";
import ProductCard from "../components/Cards/ProductCard";
import GlobalStyles from "../constants/GlobalStyles";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import { imageMap } from "../utils/imageMap";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { API_BASE_URL } from "../config/api";
import SearchBar from "../components/Header/SearchBar";

interface Product {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
}

const ProductScreen = ({
  route,
  cartItems,
  setCartItems,
}: any) => {

  const navigation = useNavigation<any>();

  const { category } = route.params;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = [...products]
    .filter(
      product =>
        product.categoryId === category.id &&
        product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "lowToHigh":
          return a.price - b.price;

        case "highToLow":
          return b.price - a.price;

        default:
          return 0;
      }
    });

  const handleAddToCart = (product: Product) => {
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
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          size="large"
          color={Colors.primary}
        />
      </View>
    );
  }

  return (
    <View style={GlobalStyles.container}>
      <Header />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search products..."
      />

      <View style={styles.topRow}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color={Colors.black}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {category.title}
        </Text>

      </View>
      <View style={styles.filterContainer}>

        <TouchableOpacity
          style={[
            styles.filterChip,
            sortOption === "lowToHigh" && styles.activeChip,
          ]}
          onPress={() => setSortOption("lowToHigh")}
        >
          <Text>Prices: Low → High</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterChip,
            sortOption === "highToLow" && styles.activeChip,
          ]}
          onPress={() => setSortOption("highToLow")}
        >
          <Text>Prices: High → Low</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard
            product={{
              ...item,
              image: imageMap[item.image],
            }}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                product: {
                  ...item,
                  image: imageMap[item.image],
                },
              })
            }
            onAddToCart={() =>
              handleAddToCart({
                ...item,
                image: imageMap[item.image],
              })
            }
          />
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({

  heading: {
    fontSize: Fonts.title,
    fontWeight: "bold",
    color: Colors.black,
  },

  list: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerTitle: {
    flex: 1,
    textAlign: "left",
    fontSize: Fonts.title,
    fontWeight: "700",
    color: Colors.black,
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },

  filterChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },

  activeChip: {
    backgroundColor: Colors.primary,
  },
});