-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2023 at 09:56 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furnihouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--
//
CREATE TABLE `carrito` (
  `id_carrito` smallint(15) NOT NULL,
  `id_usuario` tinyint(15) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `estado_pedido` varchar DEFAULT NULL,
  `fecha_finalizacion` date DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `id_usuario`, `fecha_inicio`, `estado_pedido`, `fecha_finalizacion`, `precio`) VALUES
(1, 1, '0000-00-00', 'finalizado', '0000-00-00', 50000),
(2, 2, '2023-08-21', 'finalizado', '2023-08-25', 30000);

-- --------------------------------------------------------

--
-- Table structure for table `ficha_tecnica`
--

CREATE TABLE `ficha_tecnica` (
  `id_ficha_tecnica` smallint(15) NOT NULL,
  `id_producto` tinyint(15) NOT NULL,
  `ancho` decimal(8,0) NOT NULL,
  `alto` decimal(8,0) NOT NULL,
  `garantia` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ficha_tecnica`
--

INSERT INTO `ficha_tecnica` (`id_ficha_tecnica`, `id_producto`, `ancho`, `alto`, `garantia`) VALUES
(1, 1, 20, 50, '2');

-- --------------------------------------------------------

--
-- Table structure for table `items_carrito`
--

CREATE TABLE `items_carrito` (
  `id_carrito` smallint(15) NOT NULL,
  `id_producto` tinyint(15) DEFAULT NULL,
  `cantidad` int(15) DEFAULT NULL,
  `precio_total` decimal(30,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items_carrito`
--

INSERT INTO `items_carrito` (`id_carrito`, `id_producto`, `cantidad`, `precio_total`) VALUES
(1, 1, 4, 200000);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id_producto` bigint(15) NOT NULL,
  `nombre` varchar(15) DEFAULT NULL,
  `categoria` varchar(15) DEFAULT NULL,
  `descripcion` varchar(15) DEFAULT NULL,
  `cantidad` int(15) DEFAULT NULL,
  `precio` decimal(15,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`id_producto`, `nombre`, `categoria`, `descripcion`, `cantidad`, `precio`) VALUES
(1, 'bambino', 'mesa', 'madera roja', 2, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` bigint(15) NOT NULL,
  `nombre` varchar(15) DEFAULT NULL,
  `apellido` varchar(15) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contrasena` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `email`, `contrasena`) VALUES
(1, 'mawe', 'pamplona', 'test@gmail.com', '1234567');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_carrito`);

--
-- Indexes for table `ficha_tecnica`
--
ALTER TABLE `ficha_tecnica`
  ADD PRIMARY KEY (`id_ficha_tecnica`);

--
-- Indexes for table `items_carrito`
--
ALTER TABLE `items_carrito`
  ADD PRIMARY KEY (`id_carrito`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_carrito` smallint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ficha_tecnica`
--
ALTER TABLE `ficha_tecnica`
  MODIFY `id_ficha_tecnica` smallint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `items_carrito`
--
ALTER TABLE `items_carrito`
  MODIFY `id_carrito` smallint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id_producto` bigint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` bigint(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
