import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/color";
import { fontSizes } from "../utils/sizes";

export const FocusHistory = ({ focusHistory }) => {
  if (!focusHistory || !focusHistory.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>We haven't focused on anything yet!</Text>
      </View>
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <Text style={styles.title}>
        {index + 1}. {item}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subHead}>We have focused on:</Text>
      <FlatList data={focusHistory} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: fontSizes.lg,
    fontWeight: "bold",
    color: colors.white,
    paddingBottom: 20,
    textAlign: "center",
    paddingTop: 20,
  },
  subHead: {
    fontSize: fontSizes.lg,
    fontWeight: "bold",
    color: colors.white,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: fontSizes.md,
    fontWeight: "bold",
    color: colors.white,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});
