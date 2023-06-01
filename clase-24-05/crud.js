// GET: Listar usuarios

function listarUsuarios() {
  usuarios.forEach(function(user) {
    let text = `
      -----------------Datos de Contacto -------------
      nombre: ${user.first_name}
      apellido: ${user.last_name}
      edad: ${user.age}
      hobbies: ${user.hobbies}
      esta activo: ${user.active}
    `;

    console.log(text);
  });
}


// GET: traer usuario en especifico

function searchUsuario(name) {
  let usuarioEncontrado = usuarios.find(function(user) {
    if(name === user.first_name){
      return user;
    }
  })

  if (usuarioEncontrado !== undefined) {
    let text = `
      -----------------Datos de Contacto -------------
      nombre: ${usuarioEncontrado.first_name}
      apellido: ${usuarioEncontrado.last_name}
      edad: ${usuarioEncontrado.age}
      hobbies: ${usuarioEncontrado.hobbies}
      esta activo: ${usuarioEncontrado.active}
    `;

    console.log(text);
  } else {
    console.log('No existe el usuario');
  }
}

// DELETE: elimimar usuario en especifico

function eliminarUsuariosInactivos() {
  let data = usuarios.filter(function(user) {
    if(user.active === true) {
      return user;
    }
  });

  usuarios = data
}
 
function modificarNombre() {
  let buscarUser = prompt("Ingresar nombre a buscar") 
  let nuevoValor = prompt("Ingrese nuevo valor");

  usuarios.findIndex(function(user, index) {
    if (buscarUser === user.first_name) {
      usuarios[index].first_name = nuevoValor
    }
  });
}