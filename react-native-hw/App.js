import React, { useState, useEffect} from "react";
import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useRoute } from "./Router";

const loadApplication = async () => {
  await Font.loadAsync({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute({});
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
