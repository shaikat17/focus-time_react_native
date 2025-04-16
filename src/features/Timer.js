import { useState } from "react";
import { StyleSheet, Text, View, Vibration } from "react-native";
import { Button, Icon, ProgressBar } from "react-native-paper";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/color";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;
const VIBRATION_PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    const [isPaused, setIsPaused] = useState(true);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
              <Countdown minutes={minutes} onProgress={setProgress} isPaused={isPaused} onEnd={() => {Vibration.vibrate(VIBRATION_PATTERN)}} />
              <View style={styles.countDownSub}>
              <Text style={styles.title}>Focusing on:</Text>
              <Text style={styles.task}>{focusSubject}</Text>
        </View>
          </View>
          <View style={styles.progressContainer}>
              <ProgressBar progress={progress} color={colors.progressBar} style={{height: spacing.sm}} />
          </View>

          <View style={styles.timerWrapper}>
              <Timing onChangeTime={setMinutes} />
          </View>
        
          <View style={styles.buttomWrapper}>
              <Button
                  icon={() => <Icon source={isPaused ? "play-circle" : "pause-circle"} size={70} color="white" />}
                  onPress={() => setIsPaused(!isPaused)}
              />
              <Button
                  icon={() => <Icon source="alpha-x-circle" size={70} color="white" />}
                  onPress={() => clearSubject()}
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
    flexDirection: "row",
    justifyContent: "center",
      alignItems: "center",
      paddingTop: spacing.xl,
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
    timerWrapper: {
        flexDirection: "row",
        paddingTop: spacing.xl,
    },
    clearSubjectWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: spacing.xl,
    },
});
