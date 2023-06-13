// let ham = document.createElement('p')
// let ham2 = document.createElement('p')
// let ham3 = document.createElement('p')

// ham.innerText ='ham. de pollo';
// ham2.innerText ='ham. de carne';
// ham3.innerText ='ham. de veg';

let block = document.querySelector('.block-comida');

let menu = `
<p>ham. de pollo</p>
<p>ham. de carne</p>
<p>ham. de veg</p>
`;

document.querySelector('.block-comida').innerHTML += menu

let primerItem = document.querySelector('p');


// // Clonar Nodo
// let primerItem = document.querySelectorAll('p')[1];
// document.body.append(primerItem.cloneNode(true))


// // Agregar al inicio
// block.insertBefore(
//   document.createTextNode('Hola'),
//   primerItem,
// )

let ham4 = document.createElement('p')
ham4.innerText = 'ham. pescado'

block.replaceChild(ham4, primerItem)


