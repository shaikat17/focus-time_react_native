import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

import { colors } from "../utils/color";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setFocusSubject(text)}
          label="What would you like to focus on?"
        />
        <RoundedButton style={styles.button} title="+" size={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 25,
    justifyContent: "top",
      flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
