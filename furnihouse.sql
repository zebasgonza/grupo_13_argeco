-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-09-2023 a las 18:36:21
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
  `nombre` varchar(15) DEFAULT NULL,
  `categoria` varchar(15) DEFAULT NULL,
  `imagen` varchar(90) NOT NULL,
  `descripcion` varchar(15) DEFAULT NULL,
  `cantidad` int(15) DEFAULT NULL,
  `precio` decimal(15,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`id_producto`, `nombre`, `categoria`, `imagen`, `descripcion`, `cantidad`, `precio`) VALUES
(1, 'Unity1', 'mesa', 'img-mesa-unity2.jpg', 'madera roja', 2, 50000);

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
  MODIFY `id_producto` bigint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` bigint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
