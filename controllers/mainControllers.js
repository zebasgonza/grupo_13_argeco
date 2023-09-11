const { log } = require('console');
const path = require('path');
const DB = require('../database/models'); // Importa el modelo de Sequelize

const controllers = {
    /* configuración para vista EJS */
    getIndex: async (req, res) => {
        try {
            const userData = req.session.user;

            if (userData) {
                userData = {};
            } else {
                console.log(req.session.user);
            }

            // Obtiene los productos desde la base de datos utilizando Sequelize
            const products = await DB.Stock.findAll(); // Asegúrate de reemplazar 'Product' con el nombre correcto de tu modelo

            return res.render('index', { title: 'Home', userData, products });
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error al obtener los productos');
        }
    },
};

module.exports = controllers;
