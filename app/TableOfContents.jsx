import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

const data = [
  {
    title: "መስከረም አንደኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር ዮሐንስ አኅድዐ" },
      { title: "ምስባክ መዝ 64፥10" },
      { title: "ወንጌል ዮሐ 1፥15-38" },
    ],
  },
  {
    title: "መስከረም 8",
    subChapters: [
      { title: "መዝሙር በቀዳሚ ገብረ እግዚአብሔር" },
      { title: "ምስባክ መዝ 9፥11" },
      { title: "ወንጌል ማቴ 23፥23-ፍሜ" },
    ],
  },
  {
    title: "ከመስከረም 9-15 ፍሬ ይባላል",
    subChapters: [
      { title: "መዝሙር እኩት አንተ" },
      { title: "ምስባክ መዝ 66፥6" },
      { title: "ወንጌል ማር 4፥24-39" },
    ],
  },
  {
    title: "መስከረም 16",
    subChapters: [
      { title: "መዝሙር ሐነጽዋ" },
      { title: "ምስባክ መዝ 77፥68" },
      { title: "ወንጌል ዮሐ 10፥22-ፍሜ" },
    ],
  },
  {
    title: "ከመስከረም 16-25",
    subChapters: [
      { title: "መዝሙር ዝንቱ ውእቱ መስቀል" },
      { title: "ምስባክ መዝ 59፥4" },
      { title: "ወንጌል ማር 8፥34-ፍሜ" },
    ],
  },
  {
    title: "መስከረም 24",
    subChapters: [
      { title: "መዝሙር መስቀልከ እግዚኦ ተሰብሐ" },
      { title: "ምስባክ መዝ 69፥28" },
      { title: "ወንጌል ሉቃ 9፥18" },
    ],
  },
  {
    title: "መስከረም 25",
    subChapters: [
      { title: "መዝሙር ትብሎ መርዓት" },
      { title: "ምስባክ መዝ 18፥5" },
      { title: "ወንጌል ማቴ 9፥14-18" },
    ],
  },
  {
    title: "ጥቅምት አንደኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር ትዌድሶ መርዓት" },
      { title: "ምስባክ መዝ 127፥2" },
      { title: "ወንጌል ዮሐ 3፥25-ፍሜ" },
    ],
  },
  {
    title: "ጥቅምት ሁለተኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር ኪነ ጥበቡ" },
      { title: "ምስባክ መዝ 102፥14" },
      { title: "ወንጌል ሉቃ 12፥16-32" },
    ],
  },
  {
    title: "ጥቅምት ሦስተኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር ወመኑ መሐሪ ዘከማከ" },
      { title: "ምስባክ መዝ 91፥12" },
      { title: "ወንጌል ማቴ 12፥1-32" },
    ],
  },
  {
    title: "ጥቅምት አራተኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር ሐለፈ ክረምት" },
      { title: "ምስባክ መዝ 73፥17" },
      { title: "ወንጌል ማቴ 6፥25-ፍሜ" },
    ],
  },
  {
    title: "ጥቅምት አምስተኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር ጸገየ ወይን" },
      { title: "ምስባክ መዝ 79፥8" },
      { title: "ወንጌል ማቴ 21፥33" },
    ],
  },
  {
    title: "ጥቅምት ስድስተኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር ክርስቶስ ሠርዐ ሰንበት" },
      { title: "ምስባክ መዝ 1፥3" },
      { title: "ወንጌል ማቴ 6፥25" },
    ],
  },
  {
    title: "ኅዳር አንደኛ ሳምንት",
    subChapters: [
      { title: "መዝሙር እንኳን ዝረው" },
      { title: "ምስባክ መዝ 104፥5" },
      { title: "ወንጌል ማቴ 22፥1-14" },
    ],
  },
];

const TableOfContents = () => {
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const handlePress = (subChapterTitle) => {
    navigation.navigate("SubChapterScreen", { subChapterTitle });
  };

  const toggleCollapse = (index) => {
    setExpandedChapter(expandedChapter === index ? null : index);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredData = data.filter(chapter =>
    chapter.title.toLowerCase().includes(searchQuery) ||
    chapter.subChapters.some(subChapter =>
      subChapter.title.toLowerCase().includes(searchQuery)
    )
  );

  const renderSubChapters = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.title)} style={styles.subChapterContainer}>
      <Text style={styles.subChapter}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderChapter = ({ item, index }) => (
    <View style={styles.chapterContainer}>
      <TouchableOpacity onPress={() => toggleCollapse(index)} style={styles.chapterButton}>
        <Text style={styles.chapterTitle}>{item.title}</Text>
        <IconButton
          icon={expandedChapter === index ? "chevron-up" : "chevron-down"}
          size={24}
          onPress={() => toggleCollapse(index)}
        />
      </TouchableOpacity>
      {expandedChapter === index && (
        <FlatList
          data={item.subChapters}
          renderItem={renderSubChapters}
          keyExtractor={(subItem, index) => subItem.title + index}
          style={styles.subChapterList}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search chapters..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredData}
        renderItem={renderChapter}
        keyExtractor={(item, index) => item.title + index}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  flatList: {
    flexGrow: 1,
  },
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
    fontSize: 18,
  },
  chapterContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 2,
  },
  chapterButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chapterTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  subChapterList: {
    marginTop: 8,
  },
  subChapterContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  subChapter: {
    fontSize: 18,
    color: "#666",
  },
});

export default TableOfContents;
