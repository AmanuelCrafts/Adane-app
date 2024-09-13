import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require("../assets/images/image.png")} // Local image
        style={styles.image}
        resizeMode="contain"
      />

      {/* Amharic Welcome Text */}
      <Text style={styles.welcomeText}>እንኳን ወደ ግጻዌ በደህና መጡ!</Text>
      <Text style={styles.subText}>ከመስከረም እስከ ጥር</Text>

      {/* Custom Button for Table of Contents */}
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => navigation.navigate("TableOfContents")}
      >
        <Text style={styles.buttonText}>ወደ የክፍሎች ይህ እንድትሄዱ</Text>
      </TouchableOpacity>

      {/* Custom Button for Contact Us */}
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <Text style={styles.buttonText}>ያግኙን</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // White background
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000", // Black color
    fontFamily: "CustomFont", // Ensure this font is added in your project
  },
  subText: {
    fontSize: 16,
    color: "#555555", // Dark gray
    marginBottom: 20,
    fontFamily: "CustomFont",
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: "#000000", // Black
  },
  secondaryButton: {
    backgroundColor: "#ffffff", // White
    borderColor: "#000000", // Black border
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff", // White text for black button
    fontWeight: "bold",
    fontFamily: "CustomFont",
  },
});

export default HomePage;
