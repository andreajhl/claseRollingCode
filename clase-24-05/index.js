class Carro {
  constructor(modelo, anio, marca) {
    this.modeloDeAuto = modelo;
    this.anio = anio;
    this.marca = marca
  }

  encender() {
    console.log('rummmm!');
  }

  set cambiarAnio(nuevoAnio) {
    this.anio = nuevoAnio
  }

  get fichaTecnica() {
    return `-------Ficha Tecnica-----------
      año: ${this.anio},
      marca: ${this.marca},
      modelo: ${this.modeloDeAuto}
    `;
  }
}

let auto = new Carro('logan', 2023, 'renault');

console.log(auto.fichaTecnica);





// function Carro(modelo, anio, marca) {
//   this.modeloDeAuto = modelo;
//   this.anio = anio;
//   this.marca = marca
// }

// console.log(new Carro('logan', 2023, 'renault'));
// console.log(new Carro('aveo', 2021, 'chevrolet'));
// console.log(new Carro('yaris', 2020, 'toyota'));
// console.log(new Carro());


// console.log('----------------------------------------');

// console.log({
//   modeloDeAuto: 'logan',
//   año: 2023,
//   marca: 'renualt'
// });

// console.log({
//   modeloDeAuto: 'aveo',
//   año: 2021,
//   marca: 'chevrolet'
// });

// console.log({
//   modeloDeAuto: 'ayarisveo',
//   año: 2020,
// });

/**
 * {
 *  modelo: 'logan',
 * año: 2023,
 * marca: 'renualt'
 * }
 */