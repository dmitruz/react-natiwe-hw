import React, { useState, useEffect} from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/auth/LoginScreen"
import RegistrationScreen from "./screens/auth/RegistrationScreen";

const loadApplication = async () => {
  await Font.loadAsync({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
  });
};

const AuthStack = createStackNavigator();
const MainTab = createStackNavigator();

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
  <AuthStack.Screen 
    options={{
      headerShown: false,
    }}
    name="Login"
    component={LoginScreen}
    />
    <AuthStack.Screen 
    options={{
      headerShown: false,
    }}
    name="Registration"
    component={RegistrationScreen}
    />
    
</AuthStack.Navigator>
</NavigationContainer>

  );
}

