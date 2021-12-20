/* eslint-disable sonarjs/no-duplicated-branches */
/* eslint-disable complexity */
const cartaTexto = document.getElementById('carta-texto'); // text input
const criarCarta = document.getElementById('criar-carta'); // button
const cartaGerada = document.getElementById('carta-gerada'); // p container
const cont = document.getElementById('carta-contador'); // contador
let palavras = document.querySelectorAll('.teste'); // palavras
let palavrasCarta = [];
let text = '';

// usando as classes
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

// gerar a carta
criarCarta.addEventListener('click', () => {
  cartaGerada.innerHTML = '';
  palavrasCarta = cartaTexto.value.split(' ');
  for (let i = 0; i < palavrasCarta.length; i += 1) {
    text = document.createElement('span');
    text.innerText = palavrasCarta[i];
    /* text.classList.add('teste'); */
    cartaGerada.appendChild(text);
  }
  if (text.innerText === '' || cartaTexto.value === null) {
    text.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  cont.innerText = `Número de palavras: ${palavrasCarta.length}`;
});

function addClass() {
  palavras = document.querySelectorAll('span'); // palavras
  for (let i = 0; i < palavras.length; i += 1) {
    if (palavras[i].innerText.length % 2 === 0) {
      palavras[i].classList.add(
        estilo[Math.floor(Math.random() * estilo.length)],
        tamanho[Math.floor(Math.random() * tamanho.length)],
        rotacao[Math.floor(Math.random() * rotacao.length)],
        inclinacao[Math.floor(Math.random() * inclinacao.length)],
      );
    } else if (palavras[i].innerText.length % 2 === 1) {
      palavras[i].classList.add(
        estilo[Math.floor(Math.random() * estilo.length)],
        tamanho[Math.floor(Math.random() * tamanho.length)],
        rotacao[Math.floor(Math.random() * rotacao.length)],
        inclinacao[Math.floor(Math.random() * inclinacao.length)],
      );
    }
  }
}
criarCarta.addEventListener('click', addClass);

function changeClass(element) {
  const alvo = element.target;
  alvo.removeAttribute('class');
  alvo.classList.add(
    estilo[Math.floor(Math.random() * estilo.length)],
    tamanho[Math.floor(Math.random() * tamanho.length)],
    rotacao[Math.floor(Math.random() * rotacao.length)],
    inclinacao[Math.floor(Math.random() * inclinacao.length)],
  );
  console.log(alvo);
}
cartaGerada.addEventListener('click', changeClass);
