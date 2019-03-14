import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCTwtyZkyusEn00by89WYpei3ltn0G3sI8",
    authDomain: "nginvest-37300.firebaseapp.com",
    databaseURL: "https://nginvest-37300.firebaseio.com",
    projectId: "nginvest-37300",
    storageBucket: "",
    messagingSenderId: "59577824653"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
