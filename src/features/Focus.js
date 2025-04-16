import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput, Icon } from "react-native-paper";

import { colors } from "../utils/color";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setFocusSubject(text)}
          label="What would you like to focus on?"
        />
        <Button icon={() => <Icon source="plus-circle" size={50} color="white" />} onPress={() => addSubject(focusSubject)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: spacing.md,
    paddingRight: 0,
    justifyContent: "top",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
