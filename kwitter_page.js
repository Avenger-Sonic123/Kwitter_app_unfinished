var user_name;
var room_name;

//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBlRW2Qx0nxJqi4JYJDAZ4ugc3AIN7fss",
    authDomain: "kwitter-71a0a.firebaseapp.com",
    databaseURL: "https://kwitter-71a0a-default-rtdb.firebaseio.com",
    projectId: "kwitter-71a0a",
    storageBucket: "kwitter-71a0a.appspot.com",
    messagingSenderId: "637867753367",
    appId: "1:637867753367:web:579631b474873edf6b4ed2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
}