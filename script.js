// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBtHonInYmYZuIv5rTHeEI9MqDgOs19ZXA",
    authDomain: "auth-a539b.firebaseapp.com",
    projectId: "auth-a539b",
    storageBucket: "auth-a539b.appspot.com",
    messagingSenderId: "733454626885",
    appId: "1:733454626885:web:072a4eaa9d84ca46d7332c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInButton = document.getElementById("signInButton");
  const signOutButton = document.getElementById("signOutButton");
  const message = document.getElementById("message");
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");

  signOutButton.style.display = "none";
  message.style.display = "none";

  const userSignIn = async() => {
    signInWithPopup(auth, provider) 
    .then((result) => {
        const user = result.user
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        console.error(errorCode, errorMessage);
    })
  }

  const userSignOut = async() => {
    signOut(auth).then(() => {
        alert("You have signed out");
    }).catch((error) => {})
  }

  onAuthStateChanged(auth, (user) => {
    if(user){
        signOutButton.style.display = "block";
        message.style.display = "block";
        userName.innerHTML = user.displayName;
        userEmail.innerHTML = user.email;
    } else {
        signOutButton.style.display = "none";
        message.style.display = "none";
    }
  })

  signInButton.addEventListener("click", userSignIn);
  signOutButton.addEventListener("click", userSignOut);