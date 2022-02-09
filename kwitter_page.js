//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("text").value;
      firebase.database().ref(room_name).push({
            names: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("text").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("history").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        names = message_data['name'];
                        messages = message_data['message'];
                        like = message_data['like'];
                        v1 = "<h4>" + names + "<img class='user_tick' src='tic.png'></h4>";
                        v2 = "<h4 class='message_h4'>" + message + "</h4>";
                        v3 = "<button class='btn btn-info' id=" + firebase_message_id + "value=" + like + "onclick='updatelike(this.id)'>";
                        v4 = "<span class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span></button> <hr>";
                        row = v1 + v2 + v3 + v4;
                        document.getElementById("history").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();
function updatelike(message_id) {
      v5 = message_id;
      likes = document.getElementById(v5).value;
      updatedlike = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedlike
      });
}
function logout() {
      localStorage.removeItem("use_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
