import React, { useState, useEffect} from "react";

import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
 } from 'react-native';

 
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    'RobotoMono-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
  });
};

export default function RegistrationScreen() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 20 * 2);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      console.log("width", width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange)
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

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
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 20 : 150,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                
                <Text style={styles.headerTitle}>New user? Please Sign up</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>USER NAME</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.name}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, name: value }))
                  }
                />
              </View>

               <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>USER EMAIL</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.name}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>USER PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        
      </View>
    </TouchableWithoutFeedback>
  );
}
//Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
 
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,

    color: "blue",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "blue",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "RobotoMongo-Regular",
  },
  btn: {
    borderRadius: 6,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#4169e1",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#4169e1" : "blue",
    fontSize: 18,
    fontFamily: "RobotoMongo-Regular",
  },
  header: {
    alignItems: "center",
    marginBottom: 120,
  },
  headerTitle: {
    fontSize: 30,
    color: "blue",
    fontFamily: "RobotoMongo-Regular",
  },
});