import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js"

const signupForm = document.querySelector('#signup-form')
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email-signup')
const password = document.querySelector('.password-signup')
const confirmPassword = document.querySelector('.confirm-password')


signupForm.addEventListener('submit' , (e)=>{
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

  


    setTimeout(() => {
        alert('Registered successfully!');
        window.location = "./login.html";
    }, 1000);
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });

   firstName.value = ''
   lastName.value = ''
   email.value = ''
   password.value = ''
   confirmPassword.value = ''

})


