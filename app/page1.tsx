import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import Button from "@/components/Button";
import { router, useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import DraggableFlatList from "react-native-draggable-flatlist";
import { updateForm } from "./store/healthSlice";

const healthConcerns = [
  { id: 1, name: "Sleep" },
  { id: 2, name: "Immunity" },
  { id: 3, name: "Stress" },
  { id: 4, name: "Joint Support" },
  { id: 5, name: "Digestion" },
  { id: 6, name: "Mood" },
  { id: 7, name: "Energy" },
  { id: 8, name: "Hair, Nail, Skin" },
  { id: 9, name: "Weight Loss" },
  { id: 10, name: "Fitness" },
];

const page1 = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { healthFocus } = useSelector((state: any) => state.healthConcern);

  const toggleSelection = (item: { id: number; name: string }) => {
    const isSelected = healthFocus.some(
      (focus: { id: number }) => focus.id === item.id
    );
    if (isSelected) {
      dispatch(
        updateForm({
          healthFocus: healthFocus.filter((focus: any) => focus.id !== item.id),
        })
      );
    } else if (healthFocus.length < 5) {
      dispatch(updateForm({ healthFocus: [...healthFocus, item] }));
    }
  };

  const renderChip = ({ item }: { item: { id: number; name: string } }) => {
    const isSelected = healthFocus.some(
      (focus: { id: number }) => focus.id === item.id
    );
    return (
      <TouchableOpacity
        onPress={() => toggleSelection(item)}
        style={{
          paddingVertical: 8,
          paddingHorizontal: 12,
          margin: 6,
          borderRadius: 20,
          backgroundColor: isSelected ? "#2C3E50" : "#ECF0F1",
        }}
      ></TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.selectionContent}>
        <Text style={styles.title}>
          Select the top health concerns.
          <Text style={{ color: "red" }}>*</Text>
          <Text style={styles.title}>(up to 5)</Text>
        </Text>
        <FlatList
          data={healthConcerns}
          renderItem={renderChip}
          keyExtractor={(item) => item.id.toString()}
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
