import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjEemE5_A1vk5NR4YadO77SEhgZSY9lB8",
    authDomain: "landing-salao.firebaseapp.com",
    projectId: "landing-salao",
    storageBucket: "landing-salao.appspot.com",
    messagingSenderId: "1080492648904",
    appId: "1:1080492648904:web:9e2208f7825dab58caf8fd",
    measurementId: "G-EKS21ZW6SE"
  };
  
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;