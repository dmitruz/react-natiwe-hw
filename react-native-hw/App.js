import React, { useState, useEffect} from "react";
import {} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/LoginScreen"
//import RegistrationScreen from "./screens/RegistrationScreen";

const loadApplication = async () => {
  await Font.loadAsync({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
  });
};


export default function App () {
const [isReady, setIsReady] = useState(false);
   if (!isReady) {
    return (
      <AppLoading
      startAsync={loadApplication}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
      />
    );
  }
 
  return (
<>
<LoginScreen />

</>
  );
}

