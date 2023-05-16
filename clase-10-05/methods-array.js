const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months); // ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May'); // months[4] = 'May'

console.log(months);


let fruts = ['pera', 'manzana', 'banana'];

//-------------elimina al inicio del array ------------
// console.log(fruts);
// let eliminado = fruts.shift();
// console.log(fruts, eliminado);


//-------------agrega al inicio del array ------------
// console.log(fruts);
// fruts.unshift('mango')
// console.log(fruts, valor);


//-------------elimina al final del array ------------
// console.log(fruts);
// let eliminado = fruts.pop()
// console.log(fruts, eliminado);


//-------------agrega al final del array ------------
// console.log(fruts);
// fruts.push('mango');
// console.log(fruts);

