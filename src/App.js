import LoginScreen from "./LoginScreen";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDIIKEQXpd0hNupdh1PhNsHA6Ujv3f1Ftw",
//   authDomain: "netlflix-gpt.firebaseapp.com",
//   projectId: "netlflix-gpt",
//   storageBucket: "netlflix-gpt.appspot.com",
//   messagingSenderId: "878946852651",
//   appId: "1:878946852651:web:f1b588623cae9c8f6d2f6e",
//   measurementId: "G-R708JC2PKZ"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <LoginScreen/>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
