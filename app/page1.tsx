import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import Button from "@/components/Button";
import { router, useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import DraggableFlatList from "react-native-draggable-flatlist";

const options = [
  "Sleep",
  "Immunity",
  "Stress",
  "Joint Support",
  "Digestion",
  "Mood",
  "Energy",
  "Hair, Skin, Nails",
  "Weight Loss",
  "Fitness",
  "Special Medical Condition",
];

const page1 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.selectionContent}>
        <Text style={styles.title}>
          Select the top health concerns.
          <Text style={{ color: "red" }}>*</Text>
          <Text style={styles.title}>(up to 5)</Text>
        </Text>
        <FlatList
          data={options}
          renderItem={renderChip}
          keyExtractor={(item) => item}
          numColumns={3}
          contentContainerStyle={{ marginBottom: 20 }}
        />
      </View>
      <View style={styles.prioritizeContent}>
        <Text>Priorize</Text>
        <DraggableFlatList
          data={healthFocus}
          renderItem={renderDraggableItem}
          keyExtractor={(item) => item}
          onDragEnd={onDragEnd}
        />
      </View>
      <View style={styles.footer}>
        <Button
          label={"Back"}
          width={wp(20)}
          height={hp(5)}
          backgroundColor={undefined}
          color={"#ef6c57"}
          onPress={() => router.back()}
        />
        <Button
          label={"Next"}
          width={wp(20)}
          height={hp(5)}
          backgroundColor={"#ef6c57"}
          color={"#fff"}
          onPress={() => router.push("/page2")}
        />
      </View>
    </View>
  );
};

export default page1;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    display: "flex",
    backgroundColor: "#d9f2e7",
    flex: 1,
    gap: 10,
    padding: hp("5%"),
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  selectionContent: { flex: 4 },
  prioritizeContent: { flex: 4 },
  footer: { flex: 1, alignItems: "center", justifyContent: "space-between" },
});
