const path = require('path');
const controllers = {
    
   
    /* configuración para vista EJS */
    getIndex: (req, res) => {
         return res.render('index', { title: 'Home' });
    },
    // getLogin: (req, res) => {
    //     return res.render('login', { title: 'Iniciar Sesión' });
    // },
    // getRegister: (req, res) => {
    //     return res.render('register', { title: 'register' });
    // }

    
};
module.exports = controllers;
