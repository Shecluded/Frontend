import * as firebase from 'firebase';

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "shecluded",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSANGER_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
firebase.initializeApp(config);

export default firebase;
