-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-09-2023 a las 06:35:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `furnihouse`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id_carrito` smallint(15) NOT NULL,
  `id_usuario` tinyint(15) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `estado_pedido` varchar(50) DEFAULT NULL,
  `fecha_finalizacion` date DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `id_usuario`, `fecha_inicio`, `estado_pedido`, `fecha_finalizacion`, `precio`) VALUES
(1, 1, '0000-00-00', 'finalizado', '0000-00-00', 50000.00),
(2, 2, '2023-08-21', 'finalizado', '2023-08-25', 30000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_usuario`
--

CREATE TABLE `categoria_usuario` (
  `id_categoria_usuario` int(15) NOT NULL,
  `nombre` int(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria_usuario`
--

INSERT INTO `categoria_usuario` (`id_categoria_usuario`, `nombre`) VALUES
(1, NULL),
(2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficha_tecnica`
--

CREATE TABLE `ficha_tecnica` (
  `id_ficha_tecnica` smallint(15) NOT NULL,
  `id_producto` tinyint(15) NOT NULL,
  `ancho` decimal(8,0) NOT NULL,
  `alto` decimal(8,0) NOT NULL,
  `garantia` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ficha_tecnica`
--

INSERT INTO `ficha_tecnica` (`id_ficha_tecnica`, `id_producto`, `ancho`, `alto`, `garantia`) VALUES
(1, 1, 20, 50, '2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items_carrito`
--

CREATE TABLE `items_carrito` (
  `id_carrito` smallint(15) NOT NULL,
  `id_producto` tinyint(15) DEFAULT NULL,
  `cantidad` int(15) DEFAULT NULL,
  `precio_total` decimal(30,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `items_carrito`
--

INSERT INTO `items_carrito` (`id_carrito`, `id_producto`, `cantidad`, `precio_total`) VALUES
(1, 1, 4, 200000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id_producto` bigint(15) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `imagen` varchar(1000) NOT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `cantidad` int(15) DEFAULT NULL,
  `precio` decimal(15,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`id_producto`, `nombre`, `categoria`, `imagen`, `descripcion`, `cantidad`, `precio`) VALUES
(11, 'Tandem Clock', 'Reloj', '/img/1694396868032-relojMadera.jpg', ' Nuestro reloj de madera es más que una simple herramienta para marcar el tiempo; es una obra de arte funcional que fusiona la naturaleza con la precisión. Cada minuto que avanza se convierte en un susurro de la madre naturaleza, una sincronización con los ritmos de la vida misma.', 5, 25000),
(13, 'Azulejo', 'Mesa', '/img/1694396991212-azulejo.jpg', 'Nuestra mesa de resina es mucho más que un simple mueble; es una expresión artística de la naturaleza y la creatividad humana. Cada mesa es única, con su propia historia escrita en las vetas de la madera y la elegante resina que la atraviesa como un río de cristal.\r\n\r\nLa resina transparente atrapa la belleza natural de la madera en su interior, como una ventana hacia un bosque encantado. Los colores y patrones danzan y cambian con la luz del día, creando un ambiente cálido y acogedor en cualquier espacio.\r\n\r\nDiseñada para durar, esta mesa es mucho más que un lugar para colocar objetos. Es una conversación entre la modernidad y la naturaleza, entre la funcionalidad y la estética. Es un recordatorio de que la belleza se encuentra en la simplicidad y la apreciación de lo que la Tierra nos brinda.\r\n\r\nCada vez que te sientes alrededor de esta mesa, te sumerges en la magia de la resina y la madera, una combinación que celebra la artesanía, la innovación y la conexión con la naturaleza. Añade', 5, 150000),
(15, 'Roble Feller', 'Accesorio', '/img/1694397313382-img-feller-roup.jpg', 'Nuestro accesorio de roble es una joya de la naturaleza tallada en madera. Cada pieza es única, con la riqueza de los años impregnada en sus vetas. El roble, robusto y noble, encarna la fuerza y la belleza que solo la madre naturaleza puede brindar.\r\n\r\nEste accesorio es más que una adición a tu decoración; es un tributo al arte de la artesanía. Cada detalle meticuloso resalta la paciencia y la habilidad con las que fue creado. El roble, con su gracia eterna, se convierte en el centro de atención en cualquier espacio.\r\n\r\nColócalo en tu hogar y sentirás la conexión con la tierra, la sensación de estar en equilibrio con la naturaleza. En él, encontrarás la simplicidad y la sofisticación que solo el roble puede proporcionar.\r\n\r\nCada día que pasa, este accesorio de roble envejecerá con gracia, contando historias de tiempo y tradición. Es un tributo a la naturaleza y al arte, un toque de elegancia natural que transformará tu espacio en un rincón de serenidad y belleza atemporal.', 5, 500000),
(17, 'Fire Lamp', 'Lampara', '/img/1694397474686-img-lampara-lava.jpg', 'Nuestra lámpara de resina de roble es una obra de arte luminosa que captura la esencia de la naturaleza en su máxima expresión. Cada una de estas lámparas es una pieza única, donde la madera de roble se entrelaza con la resina, creando una danza de luz y textura que ilumina tus espacios con elegancia y calidez.\r\n\r\nLa madera de roble, con su historia grabada en sus vetas, aporta una sensación de solidez y carácter, mientras que la resina transparente revela su lado mágico, como un río de luz congelado en el tiempo.\r\n\r\nEnciende esta lámpara y verás cómo la habitación se transforma en un rincón de serenidad. Los tonos de luz se difunden suavemente a través de la resina, creando una atmósfera acogedora y mágica.\r\n\r\nEsta lámpara es más que una fuente de luz; es una conversación entre la naturaleza y la creatividad. Cada vez que la enciendas, te conectarás con la belleza de lo natural y la artesanía meticulosa.\r\n\r\nAñade un toque de encanto natural a tu hogar con nuestra lámpara de resina de ', 5, 100000),
(19, 'Caori', 'Reloj', '/img/1694397578029-img-reloj-perla.jpg', 'Nuestro reloj de resina verde es mucho más que un simple cronometrador; es una manifestación de la naturaleza y la creatividad fusionadas en un objeto único. Cada uno de estos relojes es una pieza artesanal, donde la resina verde cobra vida, atrapando la belleza de la naturaleza en su interior.\r\n\r\nEl verde es el color de la esperanza y la vitalidad, y este reloj irradia esa energía. La resina transparente, con sus matices verdes cautivadores, crea un efecto visual asombroso, como si llevaras un pedacito de bosque contigo a donde quiera que vayas.\r\n\r\nCada vez que consultes la hora en este reloj, te sumergirás en un mundo de serenidad y frescura. Las agujas del tiempo parecerán danzar sobre la superficie verde, recordándote la importancia de vivir en armonía con la naturaleza.\r\n\r\nEste reloj es más que un accesorio; es un recordatorio constante de la belleza natural que nos rodea. Es una pieza de conversación, una expresión de tu estilo único y un tributo a la creatividad que florece en t', 5, 115000),
(21, 'Tower', 'Mesa', '/img/1694397670442-img-mesa-tomy.jpg', 'Nuestra mesa es una obra maestra de la funcionalidad y el diseño. Creada con precisión y atención a cada detalle, es mucho más que un mueble; es una declaración de estilo y calidad.\r\n\r\nLa madera de alta calidad utilizada en su construcción aporta calidez y carácter a cualquier espacio. Cada veta cuenta una historia única, una huella del tiempo que se suma a su encanto.\r\n\r\nEsta mesa es versátil y duradera, lista para adaptarse a tus necesidades y resistir el paso de los años. Ya sea en una cena familiar o una reunión íntima, se convierte en el epicentro de la conversación.\r\n\r\nSu diseño elegante y atemporal la hace encajar perfectamente en cualquier decoración. Es más que una mesa, es una pieza de vida, un testigo silencioso de momentos compartidos y recuerdos atesorados.', 3, 200000),
(23, 'Fresno', 'Repisa', '/img/1694397777004-img-repisa-fresno.jpg', 'Nuestra repisa de madera es la solución perfecta para añadir estilo y funcionalidad a cualquier espacio. Su diseño versátil se adapta a tu hogar, ya sea en la sala de estar, la cocina o el dormitorio.\r\n\r\nLa madera de alta calidad le da un toque cálido y natural, mientras que su construcción resistente garantiza que puedas exhibir tus objetos favoritos o mantener tus elementos esenciales organizados con confianza.\r\n\r\nYa sea que busques un lugar para tus libros, plantas, o decoración, esta repisa es un lienzo en blanco para tu creatividad. Añade un toque de elegancia rústica a tu vida cotidiana con nuestra repisa de madera.', 5, 90000),
(25, 'Rumblo', 'Soporte', '/img/1694397858782-img-soporte-epic.jpg', 'Nuestro soporte de madera para cargar tus bebidas es mucho más que una pieza funcional; es un complemento de estilo para tus momentos de relajación. Fabricado con madera de calidad, este soporte es un reflejo de la artesanía y la belleza natural.\r\n\r\nImagina disfrutar de tu bebida favorita con facilidad y elegancia. Este soporte ofrece un lugar conveniente y atractivo para sostener tus tazas, vasos o botellas. Su diseño cuidadosamente elaborado añade un toque de calidez a tu espacio.\r\n\r\nYa sea que lo coloques en la sala de estar, la terraza o en tu rincón de lectura, este soporte de madera añade un toque de sofisticación a tus momentos de descanso. Eleva tus experiencias cotidianas con esta pieza funcional y estilizada.', 5, 65000),
(27, 'Fetich', 'Espejo', '/img/1694397947889-img-espejo-roble.jpg', 'Nuestro espejo de madera con capacidad para cargar tus bebidas es una fusión de belleza y utilidad. Este versátil espejo es mucho más que un reflejo, es una pieza única que añadirá encanto y practicidad a cualquier espacio.\r\n\r\nLa madera de alta calidad y su diseño meticuloso le dan un toque cálido y natural a tu ambiente. Pero este espejo esconde un secreto: su parte trasera alberga espacio para tus copas, vasos y botellas favoritas, creando un rincón de entretenimiento discreto.\r\n\r\nImagina la elegancia de servir una bebida desde este espejo. Es perfecto para tu sala de estar, comedor o incluso en un área de bar en casa. Una conversación cautivadora y un brindis inolvidable están a tu alcance.', 5, 95000),
(29, 'Timbord', 'Soporte', '/img/1694398031954-img-soporte-celular.jpg', 'Nuestro soporte de madera para celular es la mezcla perfecta de estilo y utilidad. Hecho con madera de calidad y diseño elegante, es el compañero ideal para tu dispositivo móvil.\r\n\r\nCon este soporte, tu teléfono se convierte en una pieza de arte funcional. Ya sea en tu escritorio, mesa de noche o área de trabajo, mantendrá tu dispositivo a la vista mientras añade un toque de sofisticación a tu espacio.\r\n\r\nEl soporte de madera es versátil y se adapta a la mayoría de los modelos de teléfonos. Es perfecto para ver videos, hacer videollamadas o simplemente mantener tu teléfono organizado y accesible.', 5, 35000),
(33, 'Gold Lamp', 'Lampara', '/img/1694398188549-img-lampara-gold.jpg', 'rincón de belleza y calidez. Cada lámpara es una pieza única, donde la resina se convierte en un río de luz, atrapando la magia de la naturaleza en su interior.\r\n\r\nLa resina transparente, con sus colores y texturas cambiantes, crea una atmósfera encantadora en cualquier lugar que la coloques. Es como tener una ventana a un mundo de luz y color en tu hogar.\r\n\r\nEnciende esta lámpara y verás cómo tu espacio cobra vida. Los tonos de luz se difunden suavemente, creando u', 5, 90000),
(35, 'Temp Lamp', 'Lampara', '/img/1694398261374-img-lampara-temp.jpg', 'Nuestra lámpara antigua es una joya del pasado que ilumina el presente con un encanto atemporal. Con su diseño clásico y detalles meticulosos, esta lámpara evoca una era de elegancia perdurable.\r\n\r\nCada curva y adorno cuentan una historia de artesanía refinada y una época en la que la iluminación era una forma de arte. El brillo cálido que emana de su luz crea una atmósfera acogedora en cualquier espacio.\r\n\r\nEsta lámpara no solo ilumina tu hogar, sino que también agrega una dosis de historia y carácter. Es el punto focal perfecto para una sala de estar, una entrada o cualquier lugar donde desees un toque de distinción.', 5, 90000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` bigint(15) NOT NULL,
  `image` varchar(30) NOT NULL,
  `nombre` varchar(15) DEFAULT NULL,
  `apellido` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contrasena` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `image`, `nombre`, `apellido`, `email`, `contrasena`) VALUES
(1, '', 'Mawensy', 'Pamplona', 'MawePamplona05@gmail.com', '1234567'),
(2, 'sebasG.png', 'Sebastian', 'Gonzalez Ortiz', 'Sebasgonza45@gmail.com', '12345678'),
(3, '', 'Omar', 'Maldonado', 'Omita@gmail.com', '12345678'),
(4, '', 'Santiago ', 'Gonzalez Perez', 'santigoperez@gmail.com', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`);

--
-- Indices de la tabla `categoria_usuario`
--
ALTER TABLE `categoria_usuario`
  ADD PRIMARY KEY (`id_categoria_usuario`);

--
-- Indices de la tabla `ficha_tecnica`
--
ALTER TABLE `ficha_tecnica`
  ADD PRIMARY KEY (`id_ficha_tecnica`);

--
-- Indices de la tabla `items_carrito`
--
ALTER TABLE `items_carrito`
  ADD PRIMARY KEY (`id_carrito`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` smallint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categoria_usuario`
--
ALTER TABLE `categoria_usuario`
  MODIFY `id_categoria_usuario` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ficha_tecnica`
--
ALTER TABLE `ficha_tecnica`
  MODIFY `id_ficha_tecnica` smallint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `items_carrito`
--
ALTER TABLE `items_carrito`
  MODIFY `id_carrito` smallint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id_producto` bigint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` bigint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
