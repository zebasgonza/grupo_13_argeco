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

    // @Post users/register 
    postRegister: (req, res) => {
        let datos = req.body;
        datos.price = Number(datos.precio);
        datos.img = req.files.map(file => '/img/users/' + file.filename);

        // encriptación contraseña
        const hashedPassword = bcrypt.hashSync(datos.password, 10);
        datos.password = hashedPassword;

        // Encriptación confirmación contraseña
        const hashedConfirmPassword = bcrypt.hashSync(datos['confirm-password'], 10);
        datos['confirm-password'] = hashedConfirmPassword;

        usersModel.create(datos);
        const userId = datos.id;
        // Debe redirreccionar a la vista de perfil usuario.
        res.redirect('/users/usersProfile/' + userId);
    },
    /* Mawe */
    getUsersProfile: async (req, res) => {
        const Usuarios = await DB.Usuarios.findByPk(1)

        console.log(Usuarios);
        //Implementar FindByPk

        /*      const userId = Number(req.params.userId);
                const user = usersModel.findById(userId) */

        const vista = await DB.Usuarios.findByPk(1)

        res.render('usersProfile', {
            title: 'Perfil de Usuario',
            user
        });

    },

    deleteUsersProfile: (req, res) => {

        const id = Number(req.params.userId);


        usersModel.deleteById(id);


        res.redirect('/');
    },

/*Mawe */   getEdit: (req, res) => {
        const id = Number(req.params.id);
        const usersToModify = usersModel.findById(id)
        if (!usersToModify) {
            return res.send('El usuario que desea buscar no se encuentra disponible :( ');
        }
        res.render('edit', {
            title: 'Edición del perfil',
            user: usersToModify
        });
    },

    putEdit: (req, res) => {
        const id = Number(req.params.id);
        const nuevosDatos = req.body;

        if (req.file) {
            nuevosDatos.image = req.file.filename;
        } else {
            nuevosDatos.image = 'default-image.png';
        }

        // nuevosDatos.image = req.file ? req.file.filename : 'default-image.png';
        usersModel.updateById(id, nuevosDatos)
        res.redirect('/');
    },

    getLogin: (req, res) => {
        res.render("login", {
            title: 'Registro'
        });
    },
// Se iniciaria ejecutando login user- Mawe
    loginUser: async (req, res) => {

        const Usuarios = await DB.Usuarios.findOne({

            email: req.body.email

        })

        
        /* const searchedUser = usersModel.findByEmail(req.body.email); */

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
