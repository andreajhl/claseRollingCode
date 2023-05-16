let fruts = ['pera', 'manzana', 'banana', 'kiwi', 'frutilla', 'nispero', 'mango'];

console.log('bucle en reversa');
for (let i = fruts.length - 1; i >= 0; i--) {
    console.log('index:', i, 'valor:', fruts[i]);
}

console.log('-------------------------------------------------------');

console.log('bucle normal');
for (let i = 0; i < fruts.length; i++) {
    console.log('index:', i, 'valor:', fruts[i]);
}
