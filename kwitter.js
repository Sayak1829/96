function login(){
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("use_name",user_name);
    window.location="kwitter_room.html";
}