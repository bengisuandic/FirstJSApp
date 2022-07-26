import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDVcasOXGQK9Nxdgp7T_n8dOzoeOpFpNlw",
  authDomain: "learn-java-script-18fdc.firebaseapp.com",
  projectId: "learn-java-script-18fdc",
  storageBucket: "learn-java-script-18fdc.appspot.com",
  messagingSenderId: "870357155100",
  appId: "1:870357155100:web:2ad875ab03c4e507730ed9"
};

console.log("hello, index");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
