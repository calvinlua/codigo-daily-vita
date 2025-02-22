import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    display: "flex",
    backgroundColor: "#d9f2e7",
    flex: 1,
  },
  header: {
    paddingTop: hp("5%"),
    paddingRight: hp("5%"),
    paddingLeft: hp("5%"),
    flex: 1,
    gap: hp("1%"),
    justifyContent: "center",
    alignItems: "center",
  },
  content: { flex: 5 },
  footer: { flex: 1, justifyContent: "center", alignItems: "center" },
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
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

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
          placeholder={{ blurhash }}
          source={require("@/assets/images/undraw_medicine.svg")}
        />
        <Text style={styles.subtitle}>
          We will ask couple of questions to better understand your vitamin need
        </Text>
      </View>
      <View style={styles.footer}>
        <Pressable onPress={() => {}} style={styles.button}>
          {({ pressed }) => (
            <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}
