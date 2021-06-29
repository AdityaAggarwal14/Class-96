//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD7s6ajPIXlL7O5_hX2lKTcoISKIIeCqC8",
      authDomain: "aditya-kwitter-app.firebaseapp.com",
      projectId: "aditya-kwitter-app",
      storageBucket: "aditya-kwitter-app.appspot.com",
      messagingSenderId: "559759804585",
      appId: "1:559759804585:web:83b89caaf31bcb27f2c1b8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

    function send(){
          msg= document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value= "";
          
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
