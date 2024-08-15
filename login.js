import { signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"
import {auth} from "./config.js"



const loginForm = document.querySelector('#login-form')
const emailLogin = document.querySelector('.email-login')
const passwordLogin = document.querySelector('.password-login')

loginForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, emailLogin.value, passwordLogin.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

    setTimeout(()=>{
        alert('login succesfully')
        window.location.href = 'index.html'
    },1000)
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
})

