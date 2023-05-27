const path = require('path');
const controllers = {
    getIndex: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/index.html'));
        

    },
    getRegister: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/register.html'));
        

    },
    getcargaEdicion: (req, res) => {

        res.sendFile(path.join(__dirname, '../views/cargaEdicion.html'));
        

    }
    
    
};
module.exports = controllers;