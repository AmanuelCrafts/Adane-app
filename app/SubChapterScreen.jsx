import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const subChapterData = {
  "መዝሙር ሐነጽዋ": amanuel,
  "ምስባክ መዝ 77፥68": amanuel,
  "ወንጌል ዮሐ 10፥22-ፍሜ": amanuel,
  "መዝሙር ዝንቱ ውእቱ መስቀል": amanuel,
  "ምስባክ መዝ 59፥4": amanuel,
  "ወንጌል ማር 8፥34-ፍሜ": amanuel,
  "መዝሙር መስቀልከ እግዚኦ ተሰብሐ": amanuel,
  "ምስባክ መዝ 69፥28": amanuel,
  "ወንጌል ሉቃ 9፥18": amanuel,
  "መዝሙር ትብሎ መርዓት": amanuel,
  "ምስባክ መዝ 18፥5": amanuel,
  "ወንጌል ማቴ 9፥14-18": amanuel,
  "መዝሙር ትዌድሶ መርዓት": amanuel,
  "ምስባክ መዝ 127፥2": amanuel,
  "ወንጌል ዮሐ 3፥25-ፍሜ": amanuel,
  "መዝሙር ኪነ ጥበቡ": amanuel,
  "ምስባክ መዝ 102፥14": amanuel,
  "ወንጌል ሉቃ 12፥16-32": amanuel,
  "መዝሙር ወመኑ መሐሪ ዘከማከ": amanuel,
  "ምስባክ መዝ 91፥12": amanuel,
  "ወንጌል ማቴ 12፥1-32": amanuel,
  "መዝሙር ሐለፈ ክረምት": amanuel,
  "ምስባክ መዝ 73፥17": amanuel,
  "ወንጌል ማቴ 6፥25-ፍሜ": amanuel,
  "መዝሙር ጸገየ ወይን": amanuel,
  "ምስባክ መዝ 79፥8": amanuel,
  "ወንጌል ማቴ 21፥33": amanuel,
  "መዝሙር ክርስቶስ ሠርዐ ሰንበ": amanuel,
  "ምስባክ መዝ 1፥3": amanuel,
  "ወንጌል ማቴ 6፥25": amanuel,
  "መዝሙር እንኳን ዝረው": amanuel,
  "ምስባክ መዝ 104፥5": amanuel,
  "ወንጌል ማቴ 22፥1-14": amanuel,
};

const SubChapterScreen = ({ route }) => {
  const { subChapterTitle } = route.params;
  const content = subChapterData[subChapterTitle] || "Content not found";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bookCover}>
        <Text style={styles.bookTitle}>{subChapterTitle}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bookCover: {
    backgroundColor: "#dcdcdc",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  bookTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  contentContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  content: {
    fontSize: 27,
    color: "#444",
    lineHeight: 35,
  },
});

export default SubChapterScreen;
