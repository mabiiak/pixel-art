/* REQUISITO 2, 3 -

  Cria uma paleta de cores - function palette
    > criar uma div - feita no html
    > definido ID

  Cria quatro cores
    > cria um elemento newColor div
    > com o for faz a repetição criando dentro da linha
    > possuem a classe color

  Definir o bg das divs - colorBg
    > O elemento [0] = black
    > black estara selecionado
    > com um for percorremos os itens com a classe color, testando sua posição para darmos a cor

*/
function colorBg() {
  const itemColor = document.getElementsByClassName('color');

  for (let i = 0; i < itemColor.length; i += 1) {
    if (itemColor[i] === itemColor[0]) {
      itemColor[i].style.backgroundColor = 'black';
      itemColor[0].className = 'color selected';
    } else if (itemColor[i] === itemColor[1]) {
      itemColor[i].style.backgroundColor = 'rgb(111, 205, 242)';
    } else if (itemColor[i] === itemColor[2]) {
      itemColor[i].style.backgroundColor = 'rgb(255, 242, 131)';
    } else {
      itemColor[i].style.backgroundColor = 'pink';
    }
  }
}

function palette() {
  const localPalette = document.querySelector('div');
  const numberColor = 4;

  for (let i = 0; i < numberColor; i += 1) {
    const newColor = document.createElement('div');
    newColor.className = 'color';
    localPalette.appendChild(newColor);
  }

  colorBg();
}

window.onload = palette;

/* REQUISITO 4, 5, 10 - 10 Feito com auxilio da Ju Barcelos e Fumagalli
  Criar a div linha dentro da section
    > for cria as linhas com base em size que vale o valor atribuido a função
    > cria class line para formatação
  Cria pixel
    > segundo for percorre a line criando pixel com base no valor de size
    > acrescenta classe pixel



  REQUISITO 10 

  Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;

  O input deve ter o id denominado board-size e o botão deve ter o id denominado generate-board;

  O input só deve aceitar número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input;

  Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";

  O novo quadro deve ter todos os pixels preenchidos com a cor branca.

  O que será verificado:

  Verifica se o input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input

  Verifica se o botão contém o texto 'VQV'

  Verifica se o input está posicionado entre a paleta de cores e o quadro de pixels

  Verifica se o botão está posicionado ao lado do input

  Verifica se nenhum valor for colocado no input ao clicar no botão, um alert é exibido com o texto: 'Board inválido!'

  Verifica se ao clicar no botão com um valor preenchido, o tamanho do board muda.

  Verifica se o novo quadro tem todos os pixels preenchidos com a cor branca

*/

// funçaõ para quando o botao for clicado pegar o valor de input e tranformar numa variavel 

let tamanho = 5;

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

tamButton.addEventListener('click', () => {
  console.log(inputTam.value);
  checkSize();
});

let linhaReset = document.querySelector('.line');

function checkSize() {
  //tamanho incial = 5 
linhaReset.innerHTML = ''
  if (inputTam.value > 4 && inputTam.value < 51) {
    // tamanho = ;
    painel(inputTam.value); // faz o quadro

  } else if (inputTam.value === '') {
    window.alert('Board inválido!');
    painel(5);

  } else {
    painel(5);
  }
}

// chamar pelo genereta bord
// resetar com innerhtml para criar com o botao

/* REQUISiTO 7 - Exercicio feito com o auxilio do Joel via slack
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

/* REQUISITO 8 - Feito com ajuda da Fumagalli
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
  for (let i = 0; i < lugar.length; i += 1) {
    if (event.target.nodeName === 'DIV') {
      event.target.style.backgroundColor = color;
    }
  }
});

itemColore.addEventListener('click', (event) => {
  
  getComputedStyle(body).backgroundColor = event;
})

// REQUISITO 9

const chamaPixel = document.querySelectorAll('.pixel');
const lugarbutton = document.querySelector('#clear-board');

lugarbutton.addEventListener('click', () => {
  for (let i = 0; i < chamaPixel.length; i += 1) {
    chamaPixel[i].style.backgroundColor = 'white';
  }
});
