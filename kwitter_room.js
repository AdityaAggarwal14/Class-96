 // Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "welcome "+ user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row= "<div class= 'room_name' id= "+Room_names+"onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"addingRoomName"
  });
  localStorage.setItem("room_name",room_name);
  window.location= "kwitter_page.html";
}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location= "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}