import * as firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./Plugin/firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
