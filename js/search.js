const form = document.querySelector('form');
const input = document.querySelector('#search-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const keyword = input.value.toLowerCase();
  const pages = ['camisetas.html', 'manga.html', 'suporte.html']; // listar paginas de busca
  const matchingPages = pages.filter((page) => page.toLowerCase().includes(keyword));
  
  if (matchingPages.length > 0) {
    window.location.href = matchingPages[0];
  } else {
    alert('Nenhuma página correspondente encontrada.');
  }
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (event) => {
  const selectedOption = document.querySelector(`#search-suggestions option[value="${event.target.value}"]`);
  if (selectedOption) {
    window.location.href = selectedOption.dataset.url;
  }
});
