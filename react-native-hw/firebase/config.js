import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app"
import { REACT_APP_KEY_FIREBASE } from "../envkey";

  const firebaseConfig = {
    apiKey: "AIzaSyA3P_8eBzbH7J3NzmuAGAPHnSprnTqUy1A",
    authDomain: "react-native-hw-525a9.firebaseapp.com",
    projectId: "react-native-hw-525a9",
    storageBucket: "react-native-hw-525a9.appspot.com",
    messagingSenderId: "365871760366",
    appId: "1:365871760366:web:fe79b08513b7768bf404ff",
   
  };

  const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };