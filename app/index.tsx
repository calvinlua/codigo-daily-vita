import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#d9f2e7",
    flex: 1,
  },
  header: {},
  title: {
    fontSize: hp("3%"),
    fontWeight: "500",
  },
  text: { fontSize: hp("2%"), fontWeight: "300" },
  subtitle: { fontSize: hp("2%"), fontWeight: "200" },
  button: {
    width: wp("70%"),
    height: hp("5%"),
    backgroundColor: "#ef6c57",
    borderRadius: 3,
    color: "white",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to DailyVita</Text>
        <Text style={styles.text}>
          Hello, we are here to make your life healthier and happier
        </Text>
      </View>
      <Image
        source={require("@/assets/images/partial-react-logo.png")}
        style={styles.reactLogo}
      />
      <Text style={styles.subtitle}>
        We will ask couple of questions to better understand your vitamin need
      </Text>
      <Pressable onPress={() => {}} style={styles.button}>
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
      </Pressable>
    </View>
  );
}
