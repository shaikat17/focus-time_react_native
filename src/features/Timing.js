import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
    return (
        <View style={styles.timingContainer}>
            <RoundedButton
                size={60}
                title="10"
                onPress={() => onChangeTime(10)}
            />
            <RoundedButton
                size={60}
                title="15"
                onPress={() => onChangeTime(15)}
            />
            <RoundedButton
                size={60}
                title="20"
                onPress={() => onChangeTime(20)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    timingContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});