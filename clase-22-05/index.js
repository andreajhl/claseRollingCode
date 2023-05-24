let usuario1 = {
  nombre: 'pepe',
  edad: 23,
  apellido: 'Fernandez',
  sexo: 'masculino',
  hijo: {
    nombre: 'pepe js',
    edad: '7',
    apellido: 'fernandez',
  },
  comprarComida: function (params) {
    console.log(`compraste ${params}`);
  }
};

usuario1.comprarComida('manzanas');

let usuario2 = {
  nombre: 'jose',
  edad: 23,
  apellido: 'Hernandez',
  sexo: 'masculino',
  hijo: {
    nombre: 'juan',
    edad: '17',
    apellido: 'Hernandez',
  },
};

let usuario3 = {
  nombre: 'carlos',
  edad: 23,
  apellido: 'Sanchez',
  sexo: 'masculino',
};

let personas = [usuario1, usuario2, usuario3];

let usuariosConHijos = [];

personas.forEach(function(params) {
  if(params.hijo !== undefined) {
    usuariosConHijos.push(params)
  }
})

console.log(usuariosConHijos);
