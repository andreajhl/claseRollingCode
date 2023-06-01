class Humano {
  genero;
  edad;
  nombre;
  salud;
  apellido;

  constructor(genero, edad, nombre, apellido, salud){
    this.genero = genero;
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
    this.salud = this.calcularSalud(salud)
  }

  calcularSalud(salud) {
    if(salud < 100 && salud > 0 ) return salud;
    return 88
  }

  hablar() {
    console.log('Hola Mundo Humano!');
  }
}

class Profesor extends Humano {
  materia;
  #anios;

  constructor(materia, anios, genero, edad, nombre, apellido) {
    super(genero, edad, nombre, apellido)
    this.materia = materia,
    this.#anios = anios
  }

  hablar() {
    console.log('Hola Mundo Profesor!');
  }
}

class Alumno extends Humano {
  constructor(genero, edad, nombre, apellido) {
    super(genero, edad, nombre, apellido)
  }
}

const profesor1 = new Humano('M', 29, 'Jose', 'Ramirez', 10);
console.log(profesor1);


// const profesor2 = new Profesor('Matematica', 6,'M', 29, 'Jose', 'Ramirez')
// console.log(profesor2);

// const alumno = new Alumno('M', 29, 'Jose', 'Ramirez')
// console.log(alumno);