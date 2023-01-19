import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
});

export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const app = initializeApp({
//   apiKey: "AIzaSyCUz_52uIiQBzNX3MSL-qg16tAPsSyXc2U",
//   authDomain: "reac-quiz-dev-4f660.firebaseapp.com",
//   projectId: "reac-quiz-dev-4f660",
//   storageBucket: "reac-quiz-dev-4f660.appspot.com",
//   messagingSenderId: "978284212159",
//   appId: "1:978284212159:web:8597171b00dbe730d0bb0a",
// });

// // Initialize Firebase
// export default app;
