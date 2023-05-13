const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));

app.get("/index",function (req, res) {
    console.log("entraron a la ruta home")

    const rutaAlArchivo = path.join(__dirname, './views/index.html')

    res.sendFile(rutaAlArchivo);
});

app.get("/productCard",function (req, res) {
    console.log("entraron a la ruta Carrito de compras")

    const rutaAlArchivo = path.join(__dirname, './views/productCard.html')

    res.sendFile(rutaAlArchivo);
});

app.get("/register",function (req, res) {
    console.log("entraron a la ruta register")

    const rutaAlArchivo = path.join(__dirname, './views/register.html')

    res.sendFile(rutaAlArchivo);
});

app.listen(3060,() => console.log("servidor corriendo en el puerto 3060"));
