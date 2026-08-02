import React, { useEffect, useRef, useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import { bannerImages } from "../../utils/bannerData";

const { width, height } = Dimensions.get("window");
const BANNER_WIDTH = width - 32;
const BANNER_HEIGHT = height * 0.75;

const BannerCarousel = () => {
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex =
                currentIndex === bannerImages.length - 1
                    ? 0
                    : currentIndex + 1;
            flatListRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
            setCurrentIndex(nextIndex);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const renderItem = ({ item }: any) => (
        <View style={styles.bannerContainer}>
            <Image
                source={item}
                style={styles.banner}
                resizeMode="cover"
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={bannerImages}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 25 }}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(
                        event.nativeEvent.contentOffset.x / BANNER_WIDTH
                    );

                    setCurrentIndex(index);
                }}
            />
        </View>
    );
};

export default BannerCarousel;

const styles = StyleSheet.create({

    container: {
        marginTop: 1,
    },

    bannerContainer: {
        width: BANNER_WIDTH,
        height: BANNER_HEIGHT,
        marginHorizontal: 10,
        alignItems: "center",
    },

    banner: {
        width: "82%",
        height: "85%",
        borderRadius: 8,
    },

});