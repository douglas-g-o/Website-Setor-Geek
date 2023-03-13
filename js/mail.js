const firebaseConfig = {
    apiKey: "AIzaSyBoXFR7T7Xdt1PJHyGlcNoTSBO6Tyae_HU",
    authDomain: "setor-geek.firebaseapp.com",
    databaseURL: "https://setor-geek-default-rtdb.firebaseio.com",
    projectId: "setor-geek",
    storageBucket: "setor-geek.appspot.com",
    messagingSenderId: "977915401324",
    appId: "1:977915401324:web:81bd95bf2ef36331203449",
    measurementId: "G-Q8L5CRXTST"
  };
  
  // inicializar firebase
  firebase.initializeApp(firebaseConfig);
  
  // referencia form database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var nome = getElementVal("nome");
    var sobrenome = getElementVal("sobrenome");
    var email = getElementVal("email");
    var telefone = getElementVal("telefone");
    var mensagem = getElementVal("mensagem");
  
    saveMessages(nome, sobrenome, email, telefone, mensagem);
  
    //   ativar alerta
    document.querySelector(".alert").style.display = "block";
  
    //   remover alerta
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   resetar form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (nome, sobrenome, email, telefone, mensagem) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      mensagem: mensagem,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  