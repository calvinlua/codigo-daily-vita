import {
  StyleSheet,
  View,
  Pressable,
  Text,
  DimensionValue,
  ColorValue,
} from "react-native";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
  width: DimensionValue | undefined;
  height: DimensionValue | undefined;
  backgroundColor?: ColorValue | undefined;
  color: ColorValue | undefined;
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "#ef6c57",
    borderRadius: 10,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default function Button({
  label,
  onPress,
  width,
  height,
  backgroundColor,
  color = "#fff",
}: Props) {
  //dark theme
  return (
    <View style={[styles.buttonContainer, { width, height, backgroundColor }]}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={[styles.buttonLabel, { color }]}>{label}</Text>
      </Pressable>
    </View>
  );
}
