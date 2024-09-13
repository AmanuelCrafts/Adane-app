import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Text, View, StatusBar } from "react-native";
import HomePage from "./index";
import TableOfContents from "./TableOfContents";
import SubChapterScreen from "./SubChapterScreen";
import ContactUs from "./ContactUs";

const Stack = createStackNavigator();

const AppNavigator = () => {
  // Load the custom font
  const [fontsLoaded] = useFonts({
    CustomFont: require("../assets/fonts/amharic-font.ttf"), // Path to your font file
  });

  if (!fontsLoaded) {
    // Return a loading screen if the font is not loaded yet
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>እቅፍ እየተጠበቀ ነው...</Text>
      </View>
    );
  }

  return (
    <>
      {/* Set StatusBar style */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={HomePage}
          options={{ headerShown: false }} // Hide header for HomePage
        />
        <Stack.Screen
          name="TableOfContents"
          component={TableOfContents}
          options={{ title: "የክፍሎች ዝርዝር" }} // Amharic title for Table of Contents
        />
        <Stack.Screen
          name="SubChapterScreen"
          component={SubChapterScreen}
          options={({ route }) => ({
            title: "ክፍል ዝርዝር", // Amharic title for SubChapterScreen
            headerStyle: { backgroundColor: "#000" }, // Header background color
            headerTintColor: "#fff", // Header text color
          })}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ title: "እኛን ያግኙ" }} // Amharic title for Contact Us
        />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
