import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Recipe } from "../types";

type RecipeCardProps = {
  recipe: Recipe;
};

export function RecipeCard(props: RecipeCardProps) {
  const { recipe } = props;
  const [likes, setLike] = useState<Recipe[]>([]);
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: recipe.picture,
        }}
        style={styles.image}
      />
      <ThemedText type="subtitle" style={styles.subtitle}>
        {recipe.title}
      </ThemedText>
      <Text style={styles.price}>Temps de cuisson : {recipe.timeMinutes} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setLike((prevLikes) => [...prevLikes, recipe])}
      >
        <Text style={styles.buttonText}>Add in like</Text>
      </TouchableOpacity>
      <Text>
        {likes.map((like, index) => (
          <View key={index}>
            <Text>{like.title}</Text>
            <Image
              source={{
                uri: like.picture,
              }}
            />
            <Text>{like.timeMinutes}</Text>
          </View>
        ))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F5F1F5",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  button: {
    backgroundColor: "#ED8243",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
