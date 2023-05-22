const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));

app.use(mainRoutes);


// app.get("/productDetail",function (req, res) {
//     console.log("entraron a la ruta Carrito de compras")

//     const rutaAlArchivo = path.join(__dirname, './views/productDetail.html')

//     res.sendFile(rutaAlArchivo);
// });

app.listen(3060,() => console.log("servidor corriendo en el puerto 3060"));
