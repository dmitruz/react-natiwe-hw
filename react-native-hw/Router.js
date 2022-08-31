import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import * as Font from "expo-font";
import LoginScreen from "./screens/auth/LoginScreen"
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";


export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons 
            name="local-post-office" 
            size={24} color="black" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="pluscircleo" size={35} color={color} />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons 
            name="face-man-profile" 
            size={24} color="black" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};