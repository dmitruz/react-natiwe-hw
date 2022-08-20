import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform
 } from 'react-native';

export default function App() {
console.log(Platform.OS)
  return (
    <View style={styles.container}>
    
    <View style={styles.form}>
      <View>
        <Text style={styles.inputTitle}>EMAIL</Text>
        <TextInput style={styles.input} textAlign={"center"} />
      </View>
       <View style={{marginTop: 20}}>
        <Text style={styles.inputTitle}>PASSWORD</Text>
        <TextInput style={styles.input} 
        textAlign={"center"}
        secureTextEntry={true} />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        <Text style={styles.btnTitle}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#212121",
    
    height: 40,
    borderRadius: 6,
    color: "blue"

  },
  from: {
    marginHorizontal: 40
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
    alignItems: "center"
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#4169el" : "#fof8ff",
    fontSize: 18
  }
});
