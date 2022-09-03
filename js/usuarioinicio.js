let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logado')
logado.innerHTML = ` ${userLogado.nome} , seja bem-vindo(a) ao Setor Geek`

if(localStorage.getItem('token') = null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'usuarioinicio.html'
}



function sair(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'index.html'
}

function compras(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'camisetas.html'
}