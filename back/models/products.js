const fs = require('fs');
const path = require('path');

const model = {
    route: '../data/products.json',

    findAll: function () {
        const productsJSON = fs.readFileSync(path.join(__dirname, this.route), 'utf-8');

        const products = JSON.parse(productsJSON);

        return products;
    },

    findById: function (id) {
        const products = this.findAll();

        let product = products.find(product => product.id === id);

        if(!product){
            product = null;
        }

        return product; 
    
    },

    deleteById: function (id) {

        let products = this.findAll();

        products = products.filter(product => product.id !== id);

        const productsJSON = JSON.stringify(products);

        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);

        return products;
    },

    updateById: function (id, newData) {
        //buscamos el array de productos
        let products = this.findAll();

        //con el findIndex,en que indicce del array de productos
        const indice = products.findIndex(productoActual =>productoActual.id === id);

        products[indice].name = newData.name;

        products[indice].Precio = newData.precio;

        //console.log(products[indice])

        const productsJSON = JSON.stringify(products);

        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);

        return products;

    },

    create: function (newProducts) {
        let products = this.findAll();

        newProducts.id = products[products.length - 1].id + 1;

        products.push(newProducts);

        const productsJSON = JSON.stringify(products);

        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);
    },

    
};

//model.updateById(1, { name: "Tostadora", precio: 45000 });
module.exports = model;