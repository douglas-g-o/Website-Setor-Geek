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
var auth = firebase.auth()
var database = firebase.database()

//let
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// register
function register () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  first_name = document.getElementById('first_name').value
  last_name = document.getElementById('last_name').value
  confirm_password = document.getElementById('confirm_password').value;

  // Validate input fields
if (validate_email(email) == false) {
  // If the email is invalid, show the error message
  msgError.setAttribute('style', 'display: block')
  msgError.innerHTML = '<strong>Email inválido</strong>'
  msgSuccess.setAttribute('style', 'display: none')
  msgSuccess.innerHTML = ''
  return
}

if (validate_password(password) == false) {
  msgError.setAttribute('style', 'display: block')
  msgError.innerHTML = '<strong>A senha deve ter pelo menos 6 caracteres</strong>'
  msgSuccess.setAttribute('style', 'display: none')
  msgSuccess.innerHTML = ''
  return

}

if (password != confirm_password) {
  msgError.setAttribute('style', 'display: block');
  msgError.innerHTML = '<strong>As senhas não correspondem</strong>';
  msgSuccess.setAttribute('style', 'display: none');
  msgSuccess.innerHTML = '';
  return;
}

if (validate_field(first_name) == false || validate_field(last_name) == false) {
  msgError.setAttribute('style', 'display: block')
  msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
  msgSuccess.innerHTML = ''
  msgSuccess.setAttribute('style', 'display: none')
  return

}

// Move on with Auth
auth.createUserWithEmailAndPassword(email, password)
.then(() => {
// Declare user variable
var user = auth.currentUser

// Add this user to Firebase Database
var database_ref = database.ref()

// Create User data
var user_data = {
  email : email,
  first_name : first_name,
  last_name : last_name,
  last_login : Date.now(),
  password : password
}

// Push to Firebase Database
database_ref.child('users/' + user.uid).set(user_data)

    //done
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = '<strong>Cadastrando usuário...';
    
    setTimeout(function() {
      msgError.setAttribute('style', 'display: none');
      msgSuccess.setAttribute('style', 'display: block');
      msgSuccess.innerHTML = '<strong>Cadastro feito com sucesso</strong>';
  }, 3000); // 3000 milliseconds (3 seconds) delay    

    setTimeout(()=>{
        window.location.href = 'login.html'
    }, 5000)

  })
  .catch((error) => {
    // Show error message
    var error_message = error.message
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>' + error_message + '</strong>'
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
let nome = document.querySelector('#first_name')
let labelname = document.querySelector('#labelname')
let validname = false

let last_name = document.querySelector('#last_name')
let label_lastname = document.querySelector('#label_lastname')
let validlastname = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validemail = false

let password = document.querySelector('#password')
let labelpassword = document.querySelector('#labelpassword')
let validpassword = false

let confirm_password = document.querySelector('#confirm_password')
let labelconfirm_password = document.querySelector('#labelconfirm_password')
let validconfirm_password = false

//attributes
nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelname.setAttribute('style', 'color: red')
    labelname.innerHTML = 'Nome *INSIRA UM NOME VALIDO'
    nome.setAttribute('style', 'border-color: red')
    validname = false
  } else {
    labelname.setAttribute('style', 'color: green')
    labelname.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validname = true
  }
})

last_name.addEventListener('keyup', () => {
  if(last_name.value.length <= 2){
    label_lastname.setAttribute('style', 'color: red')
    label_lastname.innerHTML = 'Sobrenome *'
    last_name.setAttribute('style', 'border-color: red')
    validlastname = false
  } else {
    label_lastname.setAttribute('style', 'color: green')
    label_lastname.innerHTML = 'Sobrenome'
    last_name.setAttribute('style', 'border-color: green')
    validlastname = true
  }
})

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

confirm_password.addEventListener('keyup', () => {
  if(password.value != confirm_password.value){
    labelconfirm_password.setAttribute('style', 'color: red')
    labelconfirm_password.innerHTML = '*As senhas não conferem'
    confirm_password.setAttribute('style', 'border-color: red')
    validconfirm_password = false
  } else {
    labelconfirm_password.setAttribute('style', 'color: green')
    labelconfirm_password.innerHTML = 'Confirmar Senha'
    confirm_password.setAttribute('style', 'border-color: green')
    validconfirm_password = true
  }
})

//design 

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

const passwordToggleSpans = document.querySelectorAll(".password-toggle");

passwordToggleSpans.forEach(function(el) {
  el.addEventListener("click", function() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      confirmPasswordInput.type = "text";
      el.querySelector("i").classList.remove("fa-eye");
      el.querySelector("i").classList.add("fa-eye-slash");
      passwordToggleSpans.forEach(function(span) {
        span.classList.add("show-password");
        span.classList.remove("hide-password");
      });
    } else {
      passwordInput.type = "password";
      confirmPasswordInput.type = "password";
      el.querySelector("i").classList.remove("fa-eye-slash");
      el.querySelector("i").classList.add("fa-eye");
      passwordToggleSpans.forEach(function(span) {
        span.classList.remove("show-password");
        span.classList.add("hide-password");
      });
    }
  });
});





