
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
const firebaseConfig = {
  apiKey: "AIzaSyCsbuhN3wrr7MIWJnMzE5fT4vjehiAtXlM",
  authDomain: "vue-project-ca94f.firebaseapp.com",
  projectId: "vue-project-ca94f",
  storageBucket: "vue-project-ca94f.appspot.com",
  messagingSenderId: "65962311865",
  appId: "1:65962311865:web:8fd6d62bc49a1f0ceb1b68",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");
export default firebase;
