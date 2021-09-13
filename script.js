function painel(n) {
  const size = n;
  // primeiro for para criar a div linha dentro da section
  for (let index = 0; index < size; index += 1) {
    const divQuadrado = document.querySelector('section');
    const armazemLinha = document.createElement('div');
    divQuadrado.appendChild(armazemLinha);
    divQuadrado.className = 'line';
    // segundo for para criar a div pixel dentro da div linha
    for (let i = 0; i < size; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      divQuadrado.appendChild(pixel);
    }
  }
}

painel(5);

/* ao carregar a pagina
WINDOM ONLOAD = cor preta selecionada para pintar os pixls

black = className selectd
*/

// window.onload = initialColor();

// function initialColor(color) {
//   //procurar primeira cor de collor-palette
//   const whoIsFirst = document.getElementsByClassName('color-palette');
//   for (let index = 0; index < whoIsFirst; index += 1) {
//     if (whoIsFirst/*id*/[index] === color) {
//       //add nova classe selected
//     }
//   }

//   //se black for a entrada da função acrescentar a class selected
//   if (color === whoIsFirst.className) {

//   }
// }