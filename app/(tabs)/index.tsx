import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { RecipeCard } from "../../components/RecipeCard";

type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  picture: string;
  timeMinutes: number;
};

const HomeScreen: React.FC = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("https://chef-tech-api.vercel.app/api/recipes")
      .then((rep) => {
        return rep.json();
      })
      .then((data) => setFood(data));
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ED8243", dark: "#5C3223" }}
      headerImage={
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.imageMaroc}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Salam <HelloWave /> in Habibi Restaurante!
        </ThemedText>
      </ThemedView>

      {food.map((item: Recipe, index: number) => (
        <RecipeCard key={index} recipe={item} />
      ))}
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  imageMaroc: {
    height: "100%", // Augmenter la hauteur pour un meilleur rendu
    width: "100%", // Adapter la largeur à l'écran
    resizeMode: "cover", // Assurer un bon rendu de l’image
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

export default HomeScreen;
