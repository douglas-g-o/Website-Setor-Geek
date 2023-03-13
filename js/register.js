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
  
  // inicializar firebase
  firebase.initializeApp(firebaseConfig);
  
  // referencia form database
  var contactFormDB = firebase.database().ref("register");
  
  document.getElementById("registerForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var nome = getElementVal("nome");
    var usuario = getElementVal("usuario");
    var senha = getElementVal("senha");
  
    saveMessages(nome, usuario, senha);
  }
  
  const saveMessages = (nome, usuario, senha) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      nome: nome,
      usuario: usuario,
      senha: senha,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  