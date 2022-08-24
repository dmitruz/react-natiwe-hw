import React, { useState, useEffect} from "react";
import {} from "react-native";

//import * as Font from "expo-font";
import { AppLoading } from "expo-app-loading";
import LoginScreen from "./screens/LoginScreen"
//import RegistrationScreen from "./screens/RegistrationScreen";




export default function App () {
const [isReady, setIsReady] = useState(false);


 
  return (
<>
<LoginScreen />

</>
  );
}

