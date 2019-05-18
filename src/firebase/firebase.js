import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxNl4F6f1j6RrIOnsXJDnYgHwRcPDbnco",
  authDomain: "expensify-6b9eb.firebaseapp.com",
  databaseURL: "https://expensify-6b9eb.firebaseio.com",
  projectId: "expensify-6b9eb",
  storageBucket: "expensify-6b9eb.appspot.com",
  messagingSenderId: "633676676420",
  appId: "1:633676676420:web:0035f14e966213c0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: "Rocky Green",
  age: 32,
  stressLevel: 6,
  job: {
    title: "Software Developer",
    company: "Walmart"
  },
  isSingle: false,
  location: {
    city: "Rogers",
    country: "United States"
  }
});

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Removed ref!");
//   })
//   .catch(e => {
//     console.log("Couldn't remove!");
//   });

database.ref().update({
  stressLevel: 9,
  "job/company": "Amazon",
  "location/city": "Seattle"
});
