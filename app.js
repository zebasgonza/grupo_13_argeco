const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('public'));

app.use(mainRoutes);


app.listen(3060,() => console.log("servidor corriendo en el puerto 3060"));
