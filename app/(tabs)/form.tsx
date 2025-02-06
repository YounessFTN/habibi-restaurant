import { useFood } from "@/components/context/FoodContext"; // Importer le hook personnalisé
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Form() {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [timeMinutes, setTimeMinutes] = useState(0);
  const { setFood } = useFood(); // Récupérer la fonction setFood depuis le contexte

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = () => {
    if (title && picture && timeMinutes) {
      // Ajouter l'aliment au contexte
      setFood(
        (
          prevFood: { title: string; picture: string; timeMinutes: number }[]
        ) => [
          ...prevFood,
          { title, picture, timeMinutes }, // L'aliment à ajouter
        ]
      );

      // Afficher une alerte avec les données
      Alert.alert(
        "Form Data",
        `Title: ${title}\nPicture: ${picture}\nTime: ${timeMinutes}`
      );
    } else {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ED8243", dark: "#5C3223" }}
      headerImage={
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1559586616-361e18714958?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.imageMaroc}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Formulaire</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Title</ThemedText>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Picture</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={setPicture}
          value={picture}
        />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Time (in minutes)</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTimeMinutes(Number(text))}
          value={timeMinutes.toString()}
          keyboardType="numeric"
        />
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  stepContainer: {
    backgroundColor: "#F5F1F5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: 44,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ED8243",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  imageMaroc: {
    height: "100%",
    width: "100%", // Adapter la largeur à l'écran
    resizeMode: "cover", // Assurer un bon rendu de l’image
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
