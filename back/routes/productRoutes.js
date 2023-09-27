const express = require("express");
const path = require("path");
const router = express.Router();

//requerimos multer para que el usuario pueda subir archivos.
const multer = require("multer");
//requerimos para llamar a los controladores de products
const productsControllers = require('../back/controllers/productsControllers');
//express-validatior
const { body } = require("express-validator");
const { Console } = require("console");
const { request } = require("http");

const validaciones = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre').isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),
	body('precio').notEmpty().withMessage('Tienes que escribir un numero(precio)'),
	body('categoria').notEmpty().withMessage('Tienes que escribir una categoria(silla,mesa,etc)'),
    body('descripcion').notEmpty().withMessage('Tiene que escribir una descripcion').isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres'),

    body('cantidad').notEmpty().withMessage('Tienes que escribir algun numero'),
	body('imagen').custom((value, { req }) => {
		let file = req.files[0];
		let acceptedExtensions = ['JPG, JPEG, PNG, GIF'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			console.log(file.originalname)
			if (!acceptedExtensions.includes(fileExtension)) {
				console.log('hola')
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]


// configuración de multer para administra la carga de los archivos y especificar su ubicación de guardado
// TIP: Cada uno debe instalarlo en su pc (npm i multer)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img');
    },
    filename: (req, file, cb) => {
        console.log(path.extname(file.originalname))
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

//metodos http 

//products (GET) nos MUESTRA el listado de productos 1 sebas
router.get('/', productsControllers.getProducts);

// products/create (GET) nos MUESTRA la vista para crear un producto 2 sebas
router.get('/create', productsControllers.getCreate);

// products (POST) permite que el usuario pueda CREAR y ENVIAR la info al servidor 3 mawe
router.post('/', upload.any('img'),validaciones, productsControllers.postProduct);

// products/:id/detail (GET) nos MUESTRA la vista del detalle de un producto en especifico de acuerdo a su ID 4 mawe
router.get('/:id/detail', productsControllers.getProductDetail); 

//products/:id/delete (DELETE) ELIMINA información del detalle de un producto en especifico de acuerdo a su ID 5 rosa
 router.delete('/:id/delete', productsControllers.deleteProducts);

//products/:id/update (GET) nos MUESTRA la vista para editar un producto ya existente de acuerdo a su ID 6 rosa
router.get('/:id/update', productsControllers.getUpdate);

// // @PUT /products/:id/update permite reemplazar un dato ya existente de un producto según su ID 7 omar
 router.put('/:id/update', upload.single('image'), productsControllers.updateProducts);

// products/cart (GET) MUESTRA la vista del carrito de compras 8 omar
router.get('/cart', productsControllers.getCard);

module.exports = router;