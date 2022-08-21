import React, {useState} from "react";
//import { StatusBar } from 'expo-status-bar';
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
 } from 'react-native';

 const initialState={
  email: '',
  password: ''
 }

export default function App() {
console.log(Platform.OS)
const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
const [state, setState] = useState(initialState);

const keyboardHide = () => {
  setIsKeyboardOpen(false);
  Keyboard.dismiss();
  console.log(state);
  setState(initialState);
}
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
      
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <View style={{...styles.form, marginBottom: isKeyboardOpen ? 20 : 100}}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Hello again</Text> 
      <Text style={styles.headerTitle}>Welcome back</Text>
    </View>
      <View>
        <Text style={styles.inputTitle}>EMAIL</Text>
        <TextInput style={styles.input}
         textAlign={"center"} 
         onFocus={() => setIsKeyboardOpen(true)} 
         value={state.email}
         nChangeText={(value) => setState((prevState) => ({...prevState, email: value}) )} />
      </View>
       <View style={{marginTop: 20}}>
        <Text style={styles.inputTitle}>PASSWORD</Text>
        <TextInput style={styles.input} 
        textAlign={"center"}
        secureTextEntry={true}
         onFocus={() => setIsKeyboardOpen(true)} 
         value={state.password}
         onChangeText={(value) => setState((prevState) => ({...prevState, password: value}) )}/>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        <Text style={styles.btnTitle}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#212121",
    
    height: 40,
    borderRadius: 6,
    color: "blue",

  },
  from: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "red",
    marginBottom: 20,
    fontSize: 18
  },
  btn: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : "#4169e1",
    height: 40,
    borderRadius: 6,
    borderWidt: 1,
    borderColor: Platform.OS === "ios" ? "#212121" : "transparent",
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
      }
    })
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#4169el" : "#fof8ff",
    fontSize: 18,
  },
  header: {
    alignItems: "center",
    marginBottom: 150,
  },
  headerTitle: {
    fontSize: 30,
    color: "red",
  }
});
