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
  ImageBackground,
  Button,
 } from 'react-native';

 


const initialState = {
  name: "",
  email: "",
  password: "",
};



export default function RegistrationScreen({ navigation }) {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  

  const [dimensions, setDimensions] = useState(Dimensions.get("window").width - 20 * 2);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      setDimensions(width);
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
        <ImageBackground
        style={styles.image}
        source={require("../../assets/img/backgroundTwo.jpg")}
        >
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
                
                <Text style={styles.headerTitle}>New user?</Text>
                <Text style={styles.headerTitle}>Please Sign Up!</Text>
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
              <TouchableOpacity
              onPress={() => navigation.navigate("Registration")}
              style={{
                marginTop: 20,
                alignSelf: "center",
              }}
              >
                <Text style={{ color: "#fff" }}>
                  New to application?{" "}
                  <Text style={{ fontSize: 20, color: "#ff6347" }}>
                    Sign In
                  </Text>
                </Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
//Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
  },
 
   image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
      alignItems: "center",
    },

  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,

    color: "#fff",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 18,
    //fontFamily: "RobotoMono-Regular",
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
    color: Platform.OS === "ios" ? "#4169e1" : "#fff",
    fontSize: 18,
    //fontFamily: "RobotoMono-Regular",
  },
  header: {
    alignItems: "center",
    marginBottom: 120,
  },
  headerTitle: {
    fontSize: 30,
    color: "#fff",
   // fontFamily: "RobotoMono-Regular",
  },
});