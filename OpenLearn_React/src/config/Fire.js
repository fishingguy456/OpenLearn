import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDUSBweUIWfTGfNBS9d0c3yYxt8OAZqe5w",
  authDomain: "login-b92c7.firebaseapp.com",
  databaseURL: "https://login-b92c7.firebaseio.com",
  projectId: "login-b92c7",
  storageBucket: "565329838790",
  messagingSenderId: "565329838790"
};

const fire = firebase.initializeApp(config);
export default fire;
