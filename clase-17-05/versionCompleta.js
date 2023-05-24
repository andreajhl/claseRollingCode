// Crear una aplicación de carrito de compras donde se ingresen productos
// como elementos en un array.

// las tareas que debe hacer son las siguientes:

// Agregar producto al carrito (push, unshift)

// Listar los productos del carrito (String, toString, join)

// Buscar un producto en el carrito (find)

// Filtrar productos que coincidan con una palabra (filter)

// Eliminar producto del carrito (filter);

let carritoShopping = [];
let option;

function formatearString(texto) {
    let text = texto.trim().toLowerCase();
    return text;
}

function agregarProducto() {
    let item = prompt('¿Que producto quieres agregar?');

    let itemformateado = formatearString(item)

    carritoShopping.push(itemformateado);
    console.log(carritoShopping);
}

function listarProductos() {
    console.log('Lista de productos');
    for (let index = 0; index < carritoShopping.length; index ++) {
        console.log(carritoShopping[index]);
    }
}

function encontrarProducto() {
    let itemEncontrado = false;
    let itemSearch = prompt('¿Que producto quieres buscar?');

    let itemSearchformateado = formatearString(itemSearch)

    for (let index = 0; index < carritoShopping.length; index++) {
        if(carritoShopping[index] === itemSearchformateado) {
            itemEncontrado = true
        }
    }

    if(itemEncontrado === true) {
        console.log('Ya Existe el producto');
    }else {
        console.log('No Existe el producto buscado');
    }
}

function buscarProductoPorBalabra() {
    let palabra = prompt('¿Que producto quieres buscar?');

    let palabraformateado = formatearString(palabra)

    let itemsEcontrados = [];

    for (let index = 0; index < carritoShopping.length; index++) {
        if(carritoShopping[index].includes(palabraformateado) === true) {
            itemsEcontrados.push(carritoShopping[index])
        }
    }

    if(itemsEcontrados.length > 0) {
        console.log('Estos son los items que coinciden:', itemsEcontrados);
    }else {
        console.log('No hay items que coincidan');
    }
}

function vaciarCarrito() {
    carritoShopping = [];
    console.log(carritoShopping);
}

do {

    option = prompt(`Elija una opcion:
        1. Agregar producto
        2. Listar productos
        3. Encontrar producto
        4. Filtrar productos que coincidan con una plabra
        5. Vaciar carrito
        6. Salir`);

        switch (option) {
            case '1':
                agregarProducto()
                break;
            case '2':
                listarProductos()
            break;
            case '3':
                encontrarProducto()
            break;
            case '4':
                buscarProductoPorBalabra()
            break;
            case '5':
                vaciarCarrito()
            break;
            default:
                break;
        }
        

} while (option != 6);

// == => igual que (evalua solo valor) ejemplo: "2" == 2 => true, 2 == 2 => true
// === => extrictamente igual que (evalua valor y tipo de dato) ejemplo: "2" === 2 => false, 2 === 2 => true



 

