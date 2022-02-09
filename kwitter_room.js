
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC3mjJmkrLqa0G6z8V0zMdmcfRzOyH-Rsk",
      authDomain: "testing-d022e.firebaseapp.com",
      databaseURL: "https://testing-d022e-default-rtdb.firebaseio.com",
      projectId: "testing-d022e",
      storageBucket: "testing-d022e.appspot.com",
      messagingSenderId: "213339492044",
      appId: "1:213339492044:web:a44518d296b0924d04bc69",
      measurementId: "G-7F32EK0SLF"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("use_name");
document.getElementById("name").innerHTML = "Welcome " + user_name + " !";
function Addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database.ref("/").child(room_name).update({
            key: "value"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("rooms").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name -" + Room_names);
                  row = "<div class='roomname' id=" + Room_names + "onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("rooms").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomname(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("use_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
