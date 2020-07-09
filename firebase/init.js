import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";

var config = {

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
export const firestore = firebase.firestore();
export const storage = firebase.app().storage();

export const messaging = firebase.messaging(); // THIS IS THE OFFENDING LINE Comment it out and it would work on IOS

export default firebase;
