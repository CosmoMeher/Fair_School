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

function addClass()
    {
      class_name = document.getElementById("class_name").value;
    
      firebase.database().ref("/").child(class_name).update({
        purpose : "adding class name"
      });
    
        localStorage.setItem("class_name", class_name);
        
        window.location = "kwitter_page.html";
    }

    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Class_names = childKey;
        console.log("Class Name - " + Class_names);
       row = "<div class='class_name' id="+Class_names+" onclick='redirectToClassName(this.id)' >#"+ Class_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
     });
   });
 
 }
 
 getData();
 
 function redirectToClassName(name)
 {
   console.log(name);
   localStorage.setItem("class_name", name);
     window.location = "kwitter_page.html";
 }
 
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("class_name");
     window.location = "index.html";
 }