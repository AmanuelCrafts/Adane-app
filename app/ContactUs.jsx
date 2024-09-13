import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ContactUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.backButtonText}>እንደገና ወደ መነሻ ገጽ ተመለስ</Text>
      </TouchableOpacity>

      {/* Book Information */}
      <Text style={styles.heading}>የ App ስም: ግጻዌ (ከመስከረም እስከ ጥር)</Text>

      <Text style={styles.label}>የጽሑፉ አዘጋጅ:</Text>
      <Text style={styles.text}>ዲያቆን አዳነ ታምራት</Text>

      <Text style={styles.label}>የ App አዘጋጅ:</Text>
      <Text style={styles.text}>አማኑኤል አበባው (+251967863059)</Text>

      <Text style={styles.label}>የጽሑፋን Layout የሠራው:</Text>
      <Text style={styles.text}>ዲን መልካሙ በየነ (+251913854633)</Text>

      {/* Special Thanks */}
      <Text style={styles.heading}>ምስጋና</Text>
      <Text style={styles.text}>እንድናመልከው ለፈጠረን ለልዑል እግዚአብሔር ይሁን።</Text>

      {/* Dedication */}
      <Text style={styles.heading}>መታሰቢያነቱ</Text>
      <Text style={styles.text}>
        ለነፍስ ኄር አጥላው ሚካኤል እና ለባለቤቱ አስቴር ስዩም (Minneapolis) ይሁንልኝ። በእናንተ ድጋፍ የተዘጋጀ ነውና።
      </Text>

      {/* How to Use the App */}
      <Text style={styles.heading}>የ ግጻዌ መተግበሪያ አጠቃቀም</Text>
      <Text style={styles.text}>
        ይህ መተግበሪያ የተዘጋጀው በዕለተ እሑድ ብቻ በቅዳሴ ሰዓት ከመስከረም እስከ ዐብይ ጾም መግቢያ ድረስ የሚዘመረውን የቅዱስ ያሬድ ዝማሬ፣ የዳዊትን ዝማሬ (ምስባክ) እና የወንጌሉን ምንባቡን ከአጭር ማብራሪያ ጋር የያዘ ነው።
      </Text>

      <Text style={styles.heading}>የ ግጻዌ መተግበሪያ አጠቃቀም</Text>
      <Text style={styles.text}>
        የዕለቱን ዝማሬ፣ ምስባክ፣ ወንጌል ለማግኘት ማውጫውን ይጫኑ። አስተያየት ለመስጠት (+251934535515) ይጠቀሙ።
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
    fontFamily: "CustomFont", // Use your custom font
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    color: "#666",
    fontFamily: "CustomFont", // Use your custom font
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: "#444",
    fontFamily: "CustomFont", // Use your custom font
  },
});

export default ContactUs;
