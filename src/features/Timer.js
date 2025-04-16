import { StyleSheet, Text, View } from "react-native";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { useState } from "react";

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown onProgress={() => {}} isPaused={isPaused} />
      </View>
      <View style={styles.buttomWrapper}>
        <RoundedButton
          title={`${isPaused ? "Start" : "pause"}`}
          onPress={() => setIsPaused(!isPaused)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttomWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
