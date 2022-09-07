import React, { useState } from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import { useRoute } from "./Router";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./expo-font/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [iasReady, setIasReady] = useState(false);
  const routing = useRoute(false);

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}