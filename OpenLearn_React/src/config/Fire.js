import firebase from "firebase";

const config = {
  apiKey: "itsasecret",
  authDomain: "secretidk.firebaseapp.com",
  databaseURL: "https://nobodyknows.firebaseio.com",
  projectId: "jkweknow",
  storageBucket: "PGMAKINBUCKETS",
  messagingSenderId: "idkwhattoputanymore"
};

const fire = firebase.initializeApp(config);
export default fire;
