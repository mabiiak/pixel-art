const size = 5;
// primeiro for para criar a localização da linha e a linha
for (let index = 0; index < size; index += 1) {
  // onde a linha vai ser criada
  const divQuadrado = document.querySelector('section');
  // a linha será uma div nova
  const armazemLinha = document.createElement('div');
  divQuadrado.appendChild(armazemLinha);
  divQuadrado.className = 'line';
  // referencia https://stackoverflow.com/questions/49831591/i-want-to-create-idname-property-like-classname-in-javascript
  if (this.divQuadrado !== 'undefined') {
    this.id = 'pixel-board';
  }
  // segundo for para criar os caracteres da linha
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    divQuadrado.appendChild(pixel);
  }
}
