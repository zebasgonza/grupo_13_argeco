const db = require('./models');

//const categorias = require('./models/categoria-usuarios');


db.usuarios.create(
    {
        nombre:'eze',
        apellido:'steger',
        email:'eze@gmail.com',
        contraseña: 'ezepa'
    }
);

const allUser = usuarios.findAll()
console.log(allUser);
