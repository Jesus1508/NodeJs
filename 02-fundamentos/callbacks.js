
// setTimeout(function () {
//     console.log('Hola mundo!!!')
// }, 1000);

// ==============================================

// setTimeout(() => {
//     console.log('Hola mundo!!!')
// }, 1000);

// ==============================================

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Jesus Solis'
    }
    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

getUsuarioById(10, (usuario) => {
    console.log("Hola Mundo!!!, ", usuario)
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
});