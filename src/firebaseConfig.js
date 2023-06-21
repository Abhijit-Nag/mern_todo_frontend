// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTHezW3Zx3m4zWZ_SZBAZ8ZmJwTTzqab0",
  authDomain: "todo-7f8e8.firebaseapp.com",
  projectId: "todo-7f8e8",
  storageBucket: "todo-7f8e8.appspot.com",
  messagingSenderId: "884444727966",
  appId: "1:884444727966:web:2402aa55ca5792f438098f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
    const name= result.user.displayName;
    const email= result.user.email;
    const profilePic= result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    const fullName= name.split(" ");
    const firstname=fullName[0];
    // localStorage.setItem("profilePic", profilePic);
    localStorage.setItem("firstname", firstname);
    const lastname=fullName(1);
    localStorage.setItem("lastname", lastname);
    // window.location.replace("/");
  }).catch((error) => {
    console.log(error);
  })
}

export const signOutWithGoogle= ()=>{
    signOut(auth, provider).then(()=>{
        console.log('user logged out!');
        localStorage.clear();
        window.location.reload();
    }).catch((err)=>{
        console.log(err);
    })
}