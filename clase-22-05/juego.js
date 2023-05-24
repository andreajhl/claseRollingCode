// Objetivo

// Programaremos un pequeño juego interactivo de piedra, papel o tijera. El usuario podrá
// elegir entre una de las 3 opciones y la computadora elegirá al azar otra de las 3 opciones,
// entonces, se mostrará si ganó o perdió. Para realizar esta actividad recordemos las reglas
// de este juego:
// - Piedra gana contra tijera.
// - Tijera gana contra papel.
// - Papel gana contra piedra

// array de opciones (['piedra', 'papel', 'tijera']) *
// debemos crear dos variables (usuario, pc) *
// menu de opciones para el usuario (1. piedra, 2. papel, 3.tijera) => prompt *
// en la variable del usuario voy a guardar el valor de prompt *
// Generar opcion de la Pc => Math.random() (0, 1) * 3 (si es por 4 nos puede dar en una posicion undefined)

// vamos a usar if para los casos de juego:
// - userio: Piedra, pc tijera.
// - usucario: Tijera pc papel.
// -usuario: Papel, pc piedra
//mostrar alert del ganador

let opciones = ['piedra', 'papel', 'tijera'];
let opcionUsuario;
let opcionPc;

let indexUsuario = prompt(`Elija una opcion:
\n1. ${opciones[0]}
\n2. ${opciones[1]}
\n3. ${opciones[2]}`);

// agregar validacion de que el dato sea valido

opcionUsuario = opciones[indexUsuario - 1];

let indexPC = Math.trunc(Math.random() * 3);

opcionPc = opciones[indexPC];

if (opcionUsuario == 'piedra' ) {

  if(opcionPc == 'papel') swal("El Ganador es PC", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);
  else if(opcionPc == 'tijera') swal("El Ganador es el Usuario", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);
  else swal("Es Empate", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);

} else if (opcionUsuario == 'tijera' ) {

  if(opcionPc == 'papel') swal("El Ganador es PC", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);
  else if(opcionPc == 'piedra') swal("El Ganador es el Usuario", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);
  else swal("Es Empate", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);

} else {
  if(opcionPc == 'tijera') swal("El Ganador es PC", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);
  else if(opcionPc == 'piedra') swal("El Ganador es el Usuario", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);
  else swal("Es Empate", `usuario: ${opcionUsuario}, pc: ${opcionPc}`);
}

