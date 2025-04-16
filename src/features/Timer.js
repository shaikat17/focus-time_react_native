import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/color";

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    const [isPaused, setIsPaused] = useState(true);
    const [progress, setProgress] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
              <Countdown onProgress={setProgress} isPaused={isPaused} />
              <View style={styles.countDownSub}>
              <Text style={styles.title}>Focusing on:</Text>
              <Text style={styles.task}>{focusSubject}</Text>
        </View>
          </View>
          <View style={styles.progressContainer}>
              <ProgressBar progress={progress} color={colors.progressBar} style={{height: spacing.sm}} />
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
    justifyContent: "center",
    alignItems: "center",
    },
  countDownSub: {
      paddingTop: spacing.lg,
        alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: fontSizes.lg,
  },
  task: {
    color: "white",
    fontSize: fontSizes.md,
    },
    progressContainer: {
        paddingTop: spacing.sm,
        margin: spacing.sm,
    },
});
