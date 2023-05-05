const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));

app.get("/home",function (req, res) {
    console.log("entraron a la ruta home")

    const rutaAlArchivo = path.join(__dirname, './views/index.html')

    res.sendFile(rutaAlArchivo);
});

app.listen(3060,() => console.log("servidor corriendo en el puerto 3060"));
