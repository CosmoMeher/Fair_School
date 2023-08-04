// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAs82NlvjQqQMqMw9ottUj7oEoUSyUkGBE",
    authDomain: "fairy-school-fa957.firebaseapp.com",
    projectId: "fairy-school-fa957",
    storageBucket: "fairy-school-fa957.appspot.com",
    messagingSenderId: "331308187318",
    appId: "1:331308187318:web:2814183616b91ca3a33017"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";