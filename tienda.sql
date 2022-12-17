-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2022 a las 05:51:45
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` varchar(255) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `correo_electronico` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `apellido`, `celular`, `correo_electronico`, `direccion`, `nombre`) VALUES
('1', 'Mendez Mendez', '955487421', 'Alejandro@gmail.comm', 'BI GRAND CONFECCIONES S.A.C.', 'Alejandro ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` varchar(255) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `correo_electronico` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `apellido`, `celular`, `correo_electronico`, `direccion`, `nombre`) VALUES
('1', 'Mendez', '965896527', 'Alejandro@gmail.com', 'Av. Garcilazo de la Vega N.º 1348', 'Alejandro'),
('2', 'López', '955482351', 'Bernardo@gmail.com', 'Jr. Cailloma N.º 137', 'Bernardo'),
('3', 'Carrera', '925632568', 'Arnulfo@gmail.com', 'Jr. Cailloma N.º 480-482', 'Arnulfo'),
('4', 'Aliñado Asturias', '965896325', 'Carlos@gmail.com', 'Jr. Camaná N.º 37', 'Carlos Crispín'),
('5', 'Noriega Morales', '955487111', 'Noriega@gmail.com', 'Vía de Evitamiento km 6.5', 'César Augusto'),
('6', 'Raúl Culajay', '965896326', 'Edgar@gmail.com', 'Jr. Conde de Superunda N.º 169', 'Edgar'),
('7', 'Pirír Sabán', '962232514', 'Eliza@gmail.com', 'Jr. Conde de Superunda N.º 446', 'Eliza'),
('8', 'Vazquez Villa', '955487421', 'Juan@gmail.com', 'Portal Municipal Nº44', 'Juan');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `id_dettalle_venta` int(11) NOT NULL,
  `unidades` int(11) NOT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_ventas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `dni_empleado` varchar(8) NOT NULL,
  `ape_mat` varchar(45) DEFAULT NULL,
  `ape_pat` varchar(45) DEFAULT NULL,
  `celular` varchar(9) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`dni_empleado`, `ape_mat`, `ape_pat`, `celular`, `direccion`, `nombre`) VALUES
('65235125', 'Quevedo', 'Revolorio', '965856989', 'Jr. Lampa N.º 154, 13 Puertas', 'Héctor Leónidas '),
('69586236', 'Chutá', 'Muchuch', '965869562', 'Jr. Conde Superunda N.º 169', 'José'),
('78541256', 'Ovalle', 'Depaz', '965896325', 'Portal Municipal Nº44', 'Alejandro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `marca` varchar(45) DEFAULT NULL,
  `nom_producto` varchar(80) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `descripcion`, `marca`, `nom_producto`, `precio`, `stock`) VALUES
(1, 'Multifuncional De 4 Velocidades Eléctrica', 'Genérico', 'Pulidora Lijadora', 98, 6),
(2, 'Juego de 21 piezas para mecánico, con encastre de 3/8\".', 'Pretul', 'Juego Ratchet y Dados', 37.9, 5),
(3, 'Rotomartillo 1600W 100372', 'Truper', 'Rotomartillo SDS Plus', 529, 2),
(4, 'Set de Brocas, Mechas y Accesorios 118 Pzas', 'Total', 'Set de Brocas', 209.99, 3),
(6, 'BS54-MCA Puro Cuero Planta Pu', 'Antaminka', 'Zapatos de seguridad', 212, 10),
(7, '4 peldaños capacidad de carga 175 Kg', 'Truper', 'Escalera tijera', 298.9, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_ventas` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `numero_de_comprobante` varchar(255) DEFAULT NULL,
  `precio` double NOT NULL,
  `total_ventas` double NOT NULL,
  `dni_empleado_dni_empleado` varchar(8) DEFAULT NULL,
  `id_cliente_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_ventas`, `cantidad`, `fecha`, `numero_de_comprobante`, `precio`, `total_ventas`, `dni_empleado_dni_empleado`, `id_cliente_id`) VALUES
(1, 1, '2022-12-23', '00012', 1200, 102, NULL, NULL),
(2, 1, '2022-12-22', '00013', 25, 1000, NULL, NULL),
(3, 3, '2022-12-23', '00014', 21, 100, NULL, NULL),
(4, 2, '2022-12-03', '00015', 123, 1003, NULL, NULL),
(5, 10, '2022-12-12', '00016', 205, 580, NULL, NULL),
(6, 2, '2022-12-06', '00017', 152, 100, NULL, NULL),
(7, 2, '2022-12-07', '00018', 100, 200, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD PRIMARY KEY (`id_dettalle_venta`),
  ADD KEY `FKsntaik0t9jxcky777753wytsx` (`id_producto`),
  ADD KEY `FK8yh5i20hlbc4q3fmtue4dagak` (`id_ventas`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`dni_empleado`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_ventas`),
  ADD KEY `FKqou2ymxl206frdcei0q1350ns` (`dni_empleado_dni_empleado`),
  ADD KEY `FKe0q9v2e5xk2puen5lph5egq4i` (`id_cliente_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `id_dettalle_venta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_ventas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD CONSTRAINT `FK8yh5i20hlbc4q3fmtue4dagak` FOREIGN KEY (`id_ventas`) REFERENCES `ventas` (`id_ventas`),
  ADD CONSTRAINT `FKsntaik0t9jxcky777753wytsx` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `FKe0q9v2e5xk2puen5lph5egq4i` FOREIGN KEY (`id_cliente_id`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `FKqou2ymxl206frdcei0q1350ns` FOREIGN KEY (`dni_empleado_dni_empleado`) REFERENCES `empleado` (`dni_empleado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
