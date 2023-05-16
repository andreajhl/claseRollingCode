let carritoVerduleria = ['pera', 'manzana', 'banana'];

function agregarFruta() {
    let fruta = prompt('ingrese la fruta')
    carritoVerduleria.push(fruta);
}

function eliminarUltimaFruta() {
    carritoVerduleria.pop()
}

function encontrarFruta() {
    let fruta = prompt('¿Que fruta busca?');

    let item = carritoVerduleria.find(function(element) {
        if(element === fruta) return element
    });

    if(item) return 'Ya agrego esa fruta';
    else return 'aun no agrego esa fruta'
}

function calcularTotal() {
    if(carritoVerduleria.length > 0){
        return `Tu carrito tiene ${carritoVerduleria.length} items`
    }else {
        return 'tu carrito esta vacio'
    }
}

function listarCarrito() {
    return carritoVerduleria.join(', ')
}

function vaciarCarrito() {
    carritoVerduleria = []
}

let option;

do {
    option = prompt(`Elija una opcion:
        /1. Agregar fruta
        /2. Eliminar ultima fruta
        /3. Encontrar una fruta
        /4. Total de frutas en el carrito
        /5. Listar carrito
        /6. Vaciar carrito
        /7. Salir`);

        switch (option) {
            case '1':
                agregarFruta()
                break;
            case '2':
                eliminarUltimaFruta()
            break;
            case '3':
                console.log(encontrarFruta());
                break;
            case '4':
                console.log(calcularTotal());
                break;
            case '5':
                console.log(listarCarrito());
                break;
            case '6':
                vaciarCarrito();
                break;
            default:
                console.log('Esta opcion no existe');
                break;
        }
} while (Number(option) !== 7);






// function areaTriangulo(base, altura) {
//     return (base * altura) / 2
// }

// function areaRectangulo(base, altura) {
//     return base * altura
// }



// function pedirDatos(callback) {
//     let base = Number(prompt("Debes ingresar el valor de la base"));
//     let altura = Number(prompt("Debes ingresar el valor de la altura"));

//     return callback(base, altura)
// }

// console.log(pedirDatos(areaTriangulo));
// console.log(pedirDatos(areaRectangulo));



// let num1 = Number(prompt("Debes ingresar el primer numero"))
// let num2 = Number(prompt("Debes ingresar el segundo numero"))

// let option =prompt(`Elija una opcion:
// /Nº1. suma
// /Nº2. resta
// /Nº3. multiplicacion`)

// function isNaNDatos(num1, num2) {
//     if (Number.isNaN(num1) || Number.isNaN(num2)) {
//         alert('deben ser numeros')
//         return true;
//     }
//     return false;
// }

// switch (true) {
//     case option == 1:
//         if (isNaNDatos(num1, num2) === false) {
//             console.log(num1 + num2)
//         }
//         break;
//     case option == 2:
//         if (isNaNDatos(num1, num2) === false) {
//             console.log(num1 - num2)
//         }
//         break;
//     case option == 3:
//         if (isNaNDatos(num1, num2) === false) {
//             console.log(num1 * num2)
//         }
//         break;
//     default:
//         console.log("Debes ingresar un valor con el que se pueda trabajar")
//         break;
// }

