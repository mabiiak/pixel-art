// REQUISITO 2, 3, 12 -

const itemColor = document.getElementsByClassName('color');
function colorBg() {
  itemColor[0].style.backgroundColor = 'black';
  itemColor[0].className = 'color selected';

  for (let i = 1; i < itemColor.length; i += 1) {
    const number1 = Math.floor(Math.random() * 256 + 1);
    const number2 = Math.floor(Math.random() * 256 + 1);
    const number3 = Math.floor(Math.random() * 256 + 1);

    const cor = `rgb(${number1},${number2},${number3})`;
    itemColor[i].style.backgroundColor = cor;
    console.log(cor);
  }
}

window.onload = colorBg;

/* REQUISITO 4, 5, 10 - 10
  Feito com auxilio da Ju Barcelos e Fumagalli

  Criar a div linha dentro da section
    > for cria as linhas com base em size que vale o valor atribuido a função
    > cria class line para formatação
  Cria pixel
    > segundo for percorre a line criando pixel com base no valor de size
    > acrescenta classe pixel
  Verifica valor do imput para criar o quadro
    > ao iniciar a função checksize reseta o valor da linha, fazendo com que o grid anterior seja apagado
    > vunção é chamada ao clicar no botao VQV
    > assim ja foram definidos valor min e max

*/

const tamanho = 5;
const tamButton = document.getElementById('generate-board');
const inputTam = document.getElementById('board-size');

function painel(n) {
  const size = n;

  for (let index = 0; index < size; index += 1) {
    const divQuadrado = document.querySelector('section');
    const armazemLinha = document.createElement('div');
    divQuadrado.appendChild(armazemLinha);
    divQuadrado.className = 'line';

    for (let i = 0; i < size; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      divQuadrado.appendChild(pixel);
    }
  }
}

painel(tamanho);

const linhaReset = document.querySelector('.line');

function checkSize() {
  linhaReset.innerHTML = '';
  if (inputTam.value > 4 && inputTam.value < 51) {
    painel(inputTam.value);
  } else if (inputTam.value > 50) {
    painel(50);
  } else if (inputTam.value === '') {
    window.alert('Board inválido!');
    painel(5);
  } else {
    painel(5);
  }
}

tamButton.addEventListener('click', () => {
  console.log(inputTam.value);
  checkSize();
});

/* REQUISiTO 7 -
  Exercicio feito com o auxilio do Joel via slack
  Cliquei em uma cor da paleta
    > adicionar um evento click
    > remove a classe selected de outros elementos
      funcão removeclass
      percorre todos os itens do array

  A cor foi selecionada
    > o event ela passa a ter a classe selected
*/
function removeClass() {
  const itemColore = document.getElementsByClassName('color');
  for (let i = 0; i < itemColore.length; i += 1) {
    itemColore[i].classList.remove('selected');
  }
}

const itemColore = document.querySelector('div');

function mudarClasse(event) {
  removeClass();
  event.target.classList.add('selected');
  console.log(event.target);
}

itemColore.addEventListener('click', mudarClasse);

/* REQUISITO 8 -
  Feito com ajuda da Fumagalli
  pesquisa sobre getComputedStyle:
    https://pt.stackoverflow.com/questions/406992/como-pegar-o-style-de-um-elemento-dentro-de-uma-div

   Inicialemente, ao carregar a pagina a cor selecionada é black
    > os pixels devem ser pintados de preto
    > função que copia o style para uma classe?

  cliquei no gride
    > event listen click in quadrado pixel

  pintei o pixel clicado
    > percorrer o quadradro/grid checando onde ocorreu o evento
    > o que ocorreu vai ter aquela cor que esta selecionada (class selected)

  Essa cor preencherá os pixels
    > selected copia seus atributos? sua Bg-cor?
    > selected tem que mudar o background-color para o mesmo style definido na função bgColor
    > eu consigo reutilizar bgColor?
  */
const lugarboard = document.getElementById('pixel-board');
const lugar = document.getElementsByClassName('pixel');

let color = 'black';

function qualaCor(event) {
  const rgbColor = getComputedStyle(event.target).backgroundColor;
  color = rgbColor;
}

itemColore.addEventListener('click', qualaCor);

lugarboard.addEventListener('click', (event) => {
  const evento = event.target;
  for (let i = 0; i < lugar.length; i += 1) {
    if (evento.nodeName === 'DIV') {
      evento.style.backgroundColor = color;
    }
  }
});

// REQUISITO 9

const chamaPixel = document.querySelectorAll('.pixel');
const lugarbutton = document.querySelector('#clear-board');

lugarbutton.addEventListener('click', () => {
  for (let i = 0; i < chamaPixel.length; i += 1) {
    chamaPixel[i].style.backgroundColor = 'white';
  }
});
