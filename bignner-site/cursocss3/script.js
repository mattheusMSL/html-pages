const body = document.querySelector('body');
const division = document.createElement('div');
let text = document.createElement('p');

text.textContent = "Está funcionando!";

 body.appendChild(division);
 division.appendChild(text);

console.log(division);