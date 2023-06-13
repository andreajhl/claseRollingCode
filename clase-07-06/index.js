const frutSection = document.querySelector('#fruts');
const vegetablesSection = document.querySelector('#vegetables');

let countCard = 0;

// ------------------------ Eventos tarjetas ------------------------

function addCard() {
  const itemsCard = document.querySelector('#card');

  countCard = countCard + 1;
  itemsCard.innerText = countCard;
}

fruts.forEach(function(frut) {
  let card = document.createElement('div');
  card.classList.add('card')
  
  let item = `
    <img src=${frut.url} alt=${frut.name} />
    <p>${frut.name}</p>
    <p>${frut.price}</p>
    <button id=${frut.name} onclick="addCard()">Comprar</button>
  `;

  card.innerHTML = item;
  frutSection.appendChild(card);
});


vegetables.forEach(function(veg) {
  let card = document.createElement('div');
  card.classList.add('card');

  let nameText = document.createElement('p');
  let priceText = document.createElement('p');
  let img = document.createElement('img');

  nameText.innerText = veg.name;
  priceText.innerText = veg.price;
  img.setAttribute('src', veg.url);
  img.setAttribute('alt', veg.name);

  card.append(img, nameText, priceText);
  vegetablesSection.appendChild(card);
});

// ------------------------ Eventos formulario ------------------------

const search = document.querySelector('#search');
const btnSearch = document.querySelector('#btn-search');
const searchProduct = document.querySelector('#search-product');
const form = document.querySelector('form');

function renderSearchProduct(params) {
  let frutSearch = fruts.find(function (frut) {
    if(frut.name === search.value) return frut;
  });

  if(frutSearch !== undefined) {
    searchProduct.innerHTML = `<h3>Producto Encontrado</h3>`;

    let item = `
      <div class=card>
        <img src=${frutSearch.url} alt=${frutSearch.name} />
        <p>${frutSearch.name}</p>
        <p>${frutSearch.price}</p>
      </div>
    `;

    searchProduct.innerHTML += item;
  }
}

form.addEventListener('submit', function (event) {
  searchProduct.innerHTML = ''
  frutSection.innerHTML = ''
  vegetablesSection.innerHTML = ''
  event.preventDefault();
  
  renderSearchProduct();
})

// btnSearch.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log(search.value);
// })

// search.addEventListener('focus', function () {
//   console.log("Se dispario el evento FOCUS");
// })

// search.addEventListener('blur', function () {
//   console.log("Se dispario el evento BLUR");
// })

// search.addEventListener('change', function (event) {
//   console.log("Se dispario el evento CHANGE");
// })
















// const form = document.querySelector('form');
// const search = document.querySelector('#search');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(search.value);
// });

// search.addEventListener('focus', function(){
//    console.log("Se dispario el evento FOCUS");
// });

// search.addEventListener('blur', function(){
//   console.log("Se dispario el evento BLUR");
// });

// search.addEventListener('input', function(evento){
//   console.log(evento.target.value)
//   // console.log("Se dispario el evento onChance");
// });