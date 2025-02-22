import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
          <StatusBar style="dark" />
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Stack
                screenOptions={{
                  headerTitleAlign: "center",
                  headerShown: false,
                }}
              />
            </PersistGate>
          </Provider>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
