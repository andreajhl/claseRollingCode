
let carritoVerduleria = ['pera', 'manzana', 'banana'];

function getCarritoLocal() {
  let carrito = localStorage.getItem('carrito');
  return JSON.parse(carrito);
}

function setCarritoLocal(carrito) {
  let carritoJSON = JSON.stringify(carrito);

  return localStorage.setItem('carrito', carritoJSON);
}

if (localStorage.getItem('carrito') === null) {
  setCarritoLocal(carritoVerduleria)
}

function agregarFruta(fruta) {
  let carrito = getCarritoLocal();

  carrito.push(fruta);
  setCarritoLocal(carrito)
}

function eliminarUltimaFruta() {
  let carrito = getCarritoLocal();

  carrito.pop()
  setCarritoLocal(carrito)
}

function encontrarFruta(fruta) {
  let carrito = getCarritoLocal();

  let item = carrito.find(function(element) {
    if(element === fruta) return element
  });

  if(item) return 'Ya agrego esa fruta';
  else return 'aun no agrego esa fruta'
}

function calcularTotal() {
  let carrito = getCarritoLocal();

  if(carrito.length > 0){
    return `Tu carrito tiene ${carrito.length} items`
  }else {
    return 'tu carrito esta vacio'
  }
}

function listarCarrito() {
  let carrito = getCarritoLocal();
  return carrito.join(', ')
}

function eliminarCarrito() {
  localStorage.removeItem('carrito')
}

function vaciarCarrito() {
  localStorage.setItem('carrito', JSON.stringify([]));
}