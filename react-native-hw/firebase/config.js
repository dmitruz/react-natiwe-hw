
import * as firebase from "firebase";
import "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyA3P_8eBzbH7J3NzmuAGAPHnSprnTqUy1A",
    authDomain: "react-native-hw-525a9.firebaseapp.com",
    projectId: "react-native-hw-525a9",
    storageBucket: "react-native-hw-525a9.appspot.com",
    messagingSenderId: "365871760366",
    appId: "1:365871760366:web:fe79b08513b7768bf404ff",
    measurementId: "G-G5M7J9CWBH"
  };

  export default firebase.initializeApp(firebaseConfig);