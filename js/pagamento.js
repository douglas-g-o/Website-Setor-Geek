let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logado')
logado.innerHTML = ` ${userLogado.nome}, pagamento concluido`

if(localStorage.getItem('token') == null){
  alert('Você precisa estar logado para acessar essa página')
  window.location.href = 'login.html'
}



function inicio(){
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = 'index.html'
}