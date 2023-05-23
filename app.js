const express = require('express');
const app = express();

const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

app.set("view engine", "ejs")

app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/productDetail')
]);

app.use(express.static('public'));

app.use(mainRoutes);

app.listen(3060,() => console.log("servidor corriendo en el puerto 3060"));
