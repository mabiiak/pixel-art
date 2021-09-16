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
      itemColor[i].style.backgroundColor = 'red';
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

/* REQUISITO 4, 5 -
  Criar a div linha dentro da section
    > for cria as linhas com base em size que vale o valor atribuido a função
    > cria class line para formatação
  Cria pixel
    > segundo for percorre a line criando pixel com base no valor de size
    > acrescenta classe pixel

*/
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

painel(5);

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
  console.log(itemColore);
  console.log(event.target);
}

itemColore.addEventListener('click', mudarClasse);

/* REQUISITO 8

   Inicialemente, ao carregar a pagina a cor selecionada é black
    > os pixels podem ser pintados de preto
    > função que copia o valor de uma classe para outra?
    > evento click que faz o elemento clicado passar a ter uma classe?

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
