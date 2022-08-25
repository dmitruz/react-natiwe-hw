import React, { useState, useEffect} from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/LoginScreen"
import RegistrationScreen from "./screens/RegistrationScreen";

const loadApplication = async () => {
  await Font.loadAsync({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
  });
};

const AuthStack = createStackNavigator();

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
<NavigationContainer>
<AuthStack.Navigator>
    <AuthStack.Screen name="Register" component={RegistrationScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
</AuthStack.Navigator>
</NavigationContainer>

  );
}

