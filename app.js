const express = require('express');
const app = express();
const methodOverride = require('method-override');

const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/usersRoutes');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')

/* ---- Configuración vistas EJS ---- */
app.set("view engine", "ejs")

app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/users'),
]);

/* ---- Middlewares ---- */
app.use(express.static('public'));
// nos permite recibir la info desde formularios a través del control
app.use(express.urlencoded({ extended: true }));
// convierte la información del json en un objeto de javascript para ser usar en el server.
app.use(express.json());
// habilita el uso de métodos http como (delete) y (put)
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(expressSession({
    secret: 'monito123',
    resave: false,
    saveUninitialized: true
}))

/* ---- Routers ---- */
app.use(mainRoutes);
app.use('/products', productRoutes);
app.use('/users', usersRoutes);


app.listen(3000, () => console.log("servidor corriendo en el puerto http://localhost:3000"));


/* 
Sprint 4
-Separa rutas por routers (rutas de usuarios, rutas productos y principales (home))(main routers)
-Armar ruta de post, put y delete.
-Armar controller post (fs.writefilesync - productos.push)
-Armar controller delete (fs.writefilesync - productos.filter)
-Armar controller put (fs.writefilesync - productos.getIndex)

*/
