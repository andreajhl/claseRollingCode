function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

//----------------------------- Validar existencia de productos y carrito ----------------- //
function initializeData() {
  let proudctosCarrito = JSON.parse(localStorage.getItem('car'));
  let frutsProducts = JSON.parse(localStorage.getItem('fruts'));
  let meatsProducts = JSON.parse(localStorage.getItem('meats'));
  let vegetablesProducts = JSON.parse(localStorage.getItem('vegetables'));

  switch (null) {
    case proudctosCarrito:
      setLocalStorage('car', carritoCompras);
      break;
    case frutsProducts:
      setLocalStorage('fruts', fruts);
      break;
    case meatsProducts:
      setLocalStorage('meats', meats);
      break;
    case vegetablesProducts:
      setLocalStorage('vegetables', vegetables);
      break;
    default:
      break;
  }
}
initializeData()

function cargaInicialCarrito() {
  let countCar = document.querySelector('#car');
  countCar.innerText = getLocalStorage('car').length
}
cargaInicialCarrito();

//--------------------------------------------------------------------------------------- //

//----------------------------- Renderizar tarjetas ------------------------------------ //
function createCard(arrProduct, sectionProduct) {
  sectionProduct.innerHTML = '';

  arrProduct.forEach(function(product) {
    let item = `
      <div class='card'>
        <img src=${product.url} alt=${product.name} />
        <p>${product.name}</p>
        <p>${product.price}</p>
      </div>
    `;

    sectionProduct.innerHTML += item;
  });
};

function renderCard() {
  const sectionFruts = document.querySelector('#fruts');
  const sectionMeats = document.querySelector('#meats');
  const sectionVegetables = document.querySelector('#vegetables');

  createCard(getLocalStorage('fruts'), sectionFruts);
  createCard(getLocalStorage('meats'), sectionMeats);
  createCard(getLocalStorage('vegetables'), sectionVegetables);
}
renderCard();

//--------------------------------------------------------------------------------------- //

function sendForm(event) {
  event.preventDefault();

  const nameProduct = document.querySelector('#name').value;
  const priceProduct = document.querySelector('#price').value;

  //---- seleciona solo el input radio que este selecionado ------ //
  const radiochecked = document.querySelector('input[name="category"]:checked').value;

  let newProduct = {
    name: nameProduct,
    price: priceProduct
  }

  //---- me retorna el array que hay guardado para esa key en el localStorage ------ //
  let initialValue = getLocalStorage(radiochecked);
  initialValue.push(newProduct);

  //---- guardo el nuevo valor en el localStorage ------ //
  setLocalStorage(radiochecked, initialValue);
  
  renderCard();
}

const form = document.querySelector('form');
form.addEventListener('submit', sendForm);