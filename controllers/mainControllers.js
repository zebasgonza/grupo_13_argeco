const { log } = require('console');
const path = require('path');
const controllers = {
    
   
    /* configuración para vista EJS */
    getIndex: (req, res) => {
        let userData = req.session.user;
        if(!userData){
            userData = {}
        }else{
            console.log(req.session.user);
        }
         return res.render('index', { title: 'Home',userData });
    }, 
};
module.exports = controllers;
