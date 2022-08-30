import React, { useState, useEffect} from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/auth/LoginScreen"
import RegistrationScreen from "./screens/auth/RegistrationScreen";
//import CreateScreen from "./screens/mainScreen/CreateScreen";
//import PostsScreen from "./screens/mainScreen/PostsScreen";
//import ProfileScreen from "./screens/mainScreen/ProfileScreen";

const loadApplication = async () => {
  await Font.loadAsync({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
  });
};

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();



export default function App() {
  const [isReady, setIasReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
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
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}






// <AuthStack.Navigator>
// <AuthStack.Screen
//   options={{
//     headerShown: false,
//   }}
//   name="Login"
//   component={LoginScreen}
// />
// <AuthStack.Screen
//   options={{
//     headerShown: false,
//   }}
//   name="Register"
//   component={RegisterScreen}
// />
// </AuthStack.Navigator>