const firebaseConfig = {
  apiKey: "AIzaSyAyaOmmzlJHH4OmWsKt5XdG2N5p7naIHcI",
  authDomain: "petvishwa-924f3.firebaseapp.com",
  projectId: "petvishwa-924f3",
  storageBucket: "petvishwa-924f3.appspot.com",
  messagingSenderId: "61527684517",
  appId: "1:61527684517:web:85b700047c240b8d3ee44c",
  measurementId: "G-R4DJWWDBQW"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();




function Logout() {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  //   document.getElementById("user_div").value = "";
  //   document.getElementById("login_div").value = "";
  //   console.log("Logged out")
    window.location.replace("login.html");
  }).catch(function(error) {
    // An error happened.
      console.log("Error : " + error)
  }); 
}



