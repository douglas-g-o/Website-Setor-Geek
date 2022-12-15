let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome = document.querySelector('#labelSobrenome')
let validSobrenome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labeltelefone = document.querySelector('#telefone')
let validTelefone = false

let mensagem = document.querySelector('#mensagem')
let labelmensagem = document.querySelector('#mensagem')
let validMensagem = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {  
    if(nome.value.length <= 1){
      labelNome.setAttribute('style', "color: red;font-size: 20px;font-weight: bold")
      labelNome.innerHTML = 'Nome* Preenchimento obrigatório'
      nome.setAttribute('style', 'border-color: red')
      validNome = false
      
    } else {
      labelNome.setAttribute('style', 'color: green')
      labelNome.innerHTML = 'Nome'
      nome.setAttribute('style', 'border-color: green')
      validNome = true
    }
})
sobrenome.addEventListener('keyup', () => {
    if(sobrenome.value.length <= 1){
      labelSobrenome.setAttribute('style', "color: red;font-size: 20px;font-weight: bold")
      labelSobrenome.innerHTML = 'Sobrenome* Preenchimento obrigatório'
      sobrenome.setAttribute('style', 'border-color: red')
      validSobrenome = false
    } else {
      labelSobrenome.setAttribute('style', 'color: green')
      labelSobrenome.innerHTML = 'Sobrenome'
      sobrenome.setAttribute('style', 'border-color: green')
      labelSobrenome = true
    }
})
  
email.addEventListener('keyup', () => {
    if(email.value.length <= 5){
        labelEmail.setAttribute('style', "color: red;font-size: 20px;font-weight: bold")
        labelEmail.innerHTML = 'Email* Preenchimento obrigatório'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
      } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        labelEmail = true
      }
})
  
telefone.addEventListener('keyup', () => {
    if(telefone.value.length <= 9){
        labelTelefone.setAttribute('style', "color: red;font-size: 20px;font-weight: bold")
        labelTelefone.innerHTML = 'Telefone* Somente números, obrigatório DD'
        telefone.setAttribute('style', 'border-color: red')
        validTelefone = false
      } else {
        labelTelefone.setAttribute('style', 'color: green')
        labelTelefone.innerHTML = 'Telefone'
        telefone.setAttribute('style', 'border-color: green')
        labelTelefone = true
      }
})

mensagem.addEventListener('keyup', () => {
    if(mensagem.value.length <= 4){
        labelMensagem.setAttribute('style', "color: red;font-size: 20px;font-weight: bold")
        labelMensagem.innerHTML = 'Mensagem* Insira no mínimo 5 caracteres'
        mensagem.setAttribute('style', 'border-color: red')
        validMensagem = false
      } else {
        labelMensagem.setAttribute('style', 'color: green')
        labelMensagem.innerHTML = 'Mensagem'
        mensagem.setAttribute('style', 'border-color: green')
        labelMensagem = true
      }
})