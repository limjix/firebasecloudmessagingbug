import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";

var config = {
  apiKey: "AIzaSyB70qR1gYbk_cpL4IZDdaVY3oQXABsk_Jw",
  authDomain: "tunnel-insight-270606.firebaseapp.com",
  databaseURL: "https://tunnel-insight-270606.firebaseio.com",
  projectId: "tunnel-insight-270606",
  storageBucket: "tunnel-insight-270606.appspot.com",
  messagingSenderId: "617780490793",
  appId: "1:617780490793:web:843452541815cc726f6238",
};

!firebase.apps.length ? firebase.initializeApp(config) : "";
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const persistencetype = firebase.auth.Auth.Persistence.LOCAL;
//
// //Comment this out if not using local emulator
// // firebase.firestore().settings({
// //   host: "localhost:8080",
// //   ssl: false,
// // });
export const firestoreDB = firebase.firestore().collection("PIMS").doc("PIMS");
export const firestore = firebase.firestore;
export const storage = firebase.app().storage("gs://plantinfo");
export const messaging = firebase.messaging();
// // Set VAPID KEY
// messaging.usePublicVapidKey(
//   "BDYE2EYHdIp8qHjTKcJYPvO4PgaAH2pSruP55FOtNs5jWsgdeg7YK6OgJ0daSu21kN7aSzU19NRXRqC4bfITZYQ"
// );
export default firebase;
