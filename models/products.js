const fs = require('fs');
const path = require('path');

const model = {
    router: '../data/products.json',

    findAll: function () {
        const allProducts = fs.readFileSync(path.join(__dirname, this.route), 'utf-8');

        const products = JSON.parse(allProducts);

        return products;
    },

    findById: function (id) {
        const products = this.findAll();

        console.log(products);
    },

    deleteById: function (id) {
        let products = this.findAll();

        products = products.filter(products => products.id !== id);

        const productsJSON = JSON.stringify(products);

        fs.writeFileSync(path.join(__dirname, this.route), productsJSON);

        return products;
    },

    updateById: function (id, newData) {
        let products = this.findAll();

        const indice = products.findIndex(products);

        products[indice].title = newData.title;

        products[indice].price = newData.title;

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

module.exports = model;