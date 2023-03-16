// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoXFR7T7Xdt1PJHyGlcNoTSBO6Tyae_HU",
    authDomain: "setor-geek.firebaseapp.com",
    databaseURL: "https://setor-geek-default-rtdb.firebaseio.com",
    projectId: "setor-geek",
    storageBucket: "setor-geek.appspot.com",
    messagingSenderId: "977915401324",
    appId: "1:977915401324:web:2948b7e791fe47ba203449",
    measurementId: "G-HQW8M1NGP5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

//declare variables
let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

// Set up our login function
function login () {
  // Get all our input fields 
  // if we add more we have to add them here
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false) {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Email inválido</strong>';
    msgSuccess.setAttribute('style', 'display: none');
    msgSuccess.innerHTML = '';
    return
    // Don't continue running the code
  }

  if (validate_password(password) == false) {
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Senha inválida</strong>';
    msgSuccess.setAttribute('style', 'display: none');
    msgSuccess.innerHTML = '';
    return
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Entrando na conta</strong>';
    
    setTimeout(function() {
        msgError.setAttribute('style', 'display: none');
        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Seja bem vindo</strong>';
    }, 3000); // 3000 milliseconds (3 seconds) delay    

    setTimeout(()=>{
        window.location.href = 'camisetas.html'
    }, 5000)

  })
  .catch((error) => {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    alert(error_message)
  })
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}

// design
//let
let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validemail = false

let password = document.querySelector('#password')
let labelpassword = document.querySelector('#labelpassword')
let validpassword = false

//attributes
email.addEventListener('keyup', () => {
  if(email.value.length <= 5){
    labelemail.setAttribute('style', 'color: red')
    labelemail.innerHTML = 'Email *Insira um email valido'
    email.setAttribute('style', 'border-color: red')
    validemail = false
  } else {
    labelemail.setAttribute('style', 'color: green')
    labelemail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validemail = true
  }
})

password.addEventListener('keyup', () => {
  if(password.value.length <= 5){
    labelpassword.setAttribute('style', 'color: red')
    labelpassword.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    password.setAttribute('style', 'border-color: red')
    validpassword = false
  } else {
    labelpassword.setAttribute('style', 'color: green')
    labelpassword.innerHTML = 'Senha'
    password.setAttribute('style', 'border-color: green')
    validpassword = true
  }
})

//design 

const passwordInput = document.getElementById("password");

const passwordToggleSpans = document.querySelectorAll(".password-toggle");

passwordToggleSpans.forEach(function(el) {
  el.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      el.querySelector("i").classList.remove("fa-eye");
      el.querySelector("i").classList.add("fa-eye-slash");
      passwordToggleSpans.forEach(function(span) {
        span.classList.add("show-password");
        span.classList.remove("hide-password");
      });
    } else {
      passwordInput.type = "password";
      el.querySelector("i").classList.remove("fa-eye-slash");
      el.querySelector("i").classList.add("fa-eye");
      passwordToggleSpans.forEach(function(span) {
        span.classList.remove("show-password");
        span.classList.add("hide-password");
      });
    }
  });
});