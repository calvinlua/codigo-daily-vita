import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Button from "@/components/Button";
import { router } from "expo-router";

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    display: "flex",
    backgroundColor: "#d9f2e7",
    flex: 1,
    gap: 10,
    padding: hp("5%"),
  },
  header: {
    flex: 1,
    gap: hp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: hp("3%"),
    fontWeight: "bold",
  },
  text: { fontSize: hp("2%"), fontWeight: "bold" },
  content: { flex: 5, justifyContent: "center", alignItems: "center" },
  image: {
    width: wp(80),
    height: hp(40),
  },
  subtitle: { fontSize: hp("2%"), fontWeight: "200" },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to DailyVita</Text>
        <Text style={styles.text}>
          Hello, we are here to make your life healthier and happier
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("@/assets/images/undraw_healthy-lifestyle.png")}
        />
        <Text style={styles.subtitle}>
          We will ask couple of questions to better understand your vitamin
          need.
        </Text>
      </View>
      <View style={styles.footer}>
        <Button
          label={"Get Started"}
          width={wp(80)}
          height={hp(5)}
          backgroundColor={"#ef6c57"}
          onPress={() => router.push("/page1")}
          color={"#fff"}
        ></Button>
      </View>
    </View>
  );
}
