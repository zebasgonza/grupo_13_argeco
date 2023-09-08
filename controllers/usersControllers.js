const usersModel = require('../models/users');
const bcrypt = require('bcrypt');
const DB = require('../database/models');

const controllers = {

    // @Get users/register
    getRegister: (req, res) => {
        res.render('register', {
            title: 'Registro'
        });
    },

    // @Post users/registera 
    postRegister: async (req, res) => {
        try {
            let datos = req.body;
            datos.price = Number(datos.precio);
            datos.img = req.files.map(file => '/img/users/' + file.filename);

            // Encriptación contraseña
            const hashedPassword = bcrypt.hashSync(datos.password, 10);
            datos.password = hashedPassword;

            // Encriptación confirmación contraseña
            const hashedConfirmPassword = bcrypt.hashSync(datos['confirm-password'], 10);
            datos['confirm-password'] = hashedConfirmPassword;

            // Utiliza Sequelize para crear un nuevo usuario en la base de datos
            const newUser = await DB.Usuarios.create(datos);

            // Redirige a la vista del perfil del usuario
            const userId = newUser.id_usuario; // Asegúrate de que este sea el nombre correcto del campo ID en tu modelo.
            res.redirect('/users/usersProfile/' + userId);
        } catch (error) {
            console.error('Error al crear un nuevo usuario:', error);
            // Aquí puedes manejar errores de manera adecuada, por ejemplo, mostrar un mensaje de error al usuario o redirigir a una página de error.
        }
    },
    /* Mawe */
    getUsersProfile: async (req, res) => {
try{
        console.log('SE ESTA EJECUTANDO LA FUNCION de get users');
        const userId = Number(req.params.id);
        console.log(req.params)
        console.log('user id: ' + userId);
        const user = await DB.Usuarios.findOne({
            where: {
                id_usuario: userId
            }

        });


        res.render('usersProfile', {
            title: 'Perfil de Usuario',
            user
            
        });
        }catch(error){
        console.error('error al consultar por usuario:',error)
        }
    },

    deleteUsersProfile: (req, res) => {

        const id = Number(req.params.userId);


        usersModel.deleteById(id);


        res.redirect('/');
    },


/*Mawe */   getEdit: async (req, res) => {
        const id = req.params.id;
        const usersToModify =  await DB.Usuarios.findByPk(id)

        if (!usersToModify) {
            return res.send('El usuario que desea buscar no se encuentra disponible :( ');
        }
        console.log(usersToModify);
        res.render('edit', {
            title: 'Edición del perfil',
            user: usersToModify
        });
    },


    putEdit:async (req, res) => {
        const id = req.params.id;

        const nuevosDatos = req.body;

      const userActualizado = await DB.Usuarios.update(
            nuevosDatos,
        {
            where:{id_usuario:id}
        })
        console.log(userActualizado);
        res.redirect('/');
    },

    

    getLogin: (req, res) => {
        res.render("login", {
            title: 'Registro'
        });
    },

    loginUser: (req, res) => {
        const searchedUser = usersModel.findByEmail(req.body.email);

        if (!searchedUser) {
            return res.redirect('/users/login');
        }

        const { password: hashedPw } = searchedUser;
        //console.log(req.body.password,hashedPw);
        const isCorrect = bcrypt.compareSync(req.body.password, hashedPw);

        if (isCorrect) {
            if (!!req.body.remember) {
                res.cookie('email', searchedUser.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 360 * 9999
                });
            }


            delete searchedUser.password;
            delete searchedUser.id;

            req.session.user = searchedUser;
            res.redirect('/')
        } else {
            return res.redirect('/users/login');
        }
    }

}

module.exports = controllers;
