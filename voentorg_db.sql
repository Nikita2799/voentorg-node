-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 09 2021 г., 20:26
-- Версия сервера: 5.6.37
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `voentorg_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `engName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`, `engName`) VALUES
(1, 'Одяг', 'closes'),
(2, 'Взуття', 'shose'),
(3, 'Аксесуари', 'aks'),
(4, 'sdasa', 'tes'),
(5, 'sdasa', 'tes'),
(6, 'sdasa', 'test'),
(7, 'брюки', '[object Object]'),
(8, 'хуй', 'dick'),
(9, 'йуц', 'yuts');

-- --------------------------------------------------------

--
-- Структура таблицы `orderProducts`
--

CREATE TABLE `orderProducts` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `size` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orderProducts`
--

INSERT INTO `orderProducts` (`id`, `orderId`, `productId`, `amount`, `size`) VALUES
(169, 90, 22, 3, 'M'),
(170, 90, 24, 3, 'M'),
(171, 91, 21, 3, 'M'),
(172, 91, 20, 3, 'M'),
(173, 1, 21, 3, 'M'),
(174, 1, 20, 3, 'M'),
(175, 2, 23, 1, 'xl'),
(176, 2, 23, 1, 'm'),
(177, 3, 23, 1, 'xl'),
(178, 3, 23, 1, 'm'),
(179, 4, 23, 1, 'xl'),
(180, 4, 23, 1, 'm'),
(181, 5, 23, 1, 'xl'),
(182, 5, 23, 1, 'm'),
(183, 6, 23, 1, 'xl'),
(184, 6, 23, 1, 'm'),
(185, 7, 23, 1, 'xl'),
(186, 7, 23, 1, 'm'),
(187, 8, 23, 1, 'xl'),
(188, 8, 23, 1, 'm'),
(189, 9, 23, 1, 'xl'),
(190, 9, 23, 1, 'm'),
(191, 10, 23, 1, 'xl'),
(192, 10, 23, 1, 'm'),
(193, 11, 23, 1, 'xl'),
(194, 11, 23, 1, 'm'),
(195, 12, 23, 1, 'xl'),
(196, 12, 23, 1, 'm'),
(197, 13, 23, 1, 'm');

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `orderNumber` varchar(20) NOT NULL,
  `clientName` varchar(100) NOT NULL,
  `typePost` int(11) NOT NULL,
  `city` varchar(200) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phoneClient` bigint(11) NOT NULL,
  `postNumber` int(11) NOT NULL,
  `typePay` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`orderId`, `orderNumber`, `clientName`, `typePost`, `city`, `address`, `phoneClient`, `postNumber`, `typePay`, `status`) VALUES
(1, 't8nbse2hm', 'Fil Fil Fil', 0, 'Харьков', 'Test', 380954902598, 25, 0, 1),
(2, 'l9f5vkwn0', '123321', 1, '', '', 383213213213, 0, 0, 3),
(3, '532hmmlll', '123321', 1, '', 'Гвардейцев-широнинцев 41', 383213213213, 0, 0, 0),
(4, 'txnlwkqte', '123321', 1, '', 'Гвардейцев-широнинцев 41', 383213213213, 0, 0, 0),
(5, '9bygm8qzf', 'выфвфы', 1, '', '', 381232132131, 0, 0, 2),
(6, 'knvuczdcn', 'Ytsad', 1, '321321', '321321321', 382133123213, 321321, 0, 0),
(7, 'ydcgw5e73', 'Ytsad', 1, '321321', '321321321', 382133123213, 321321, 0, 0),
(8, '3rdkdpzh6', 'Несмеянов Сергей Сергеевич', 1, '', '', 380636623175, 0, 0, 0),
(9, 'bh1rwy9ql', '123213213', 1, '', '', 0, 0, 0, 0),
(10, 'l66u35q6z', '321321', 1, '', '', 383213213213, 0, 0, 0),
(11, '3tdsdzrjp', '3213213', 1, '', '', 383213213213, 0, 0, 0),
(12, 'ix4mmt9ec', '321321321', 1, '', '', 383213123213, 0, 0, 0),
(13, 'hfki67848', 'Першина Ирина Ивановна', 1, '', '', 380509136419, 0, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` int(11) NOT NULL,
  `price` double NOT NULL,
  `discont` int(11) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `description` varchar(500) NOT NULL,
  `inOrder` int(11) DEFAULT NULL,
  `brand` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `discont`, `image`, `description`, `inOrder`, `brand`) VALUES
(23, 'nE TEST', 3, 1, 0, 'hot-air-balloon 1.png', 'что то', NULL, 'Куку'),
(24, 'test', 2, 1, 123, 'thailand-baht.png', 'descrt', NULL, 'test');

-- --------------------------------------------------------

--
-- Структура таблицы `subcategory`
--

CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `subcategory`
--

INSERT INTO `subcategory` (`id`, `categoryId`, `name`) VALUES
(1, 1, 'Верхня одежа'),
(2, 3, 'Гаманці '),
(3, 3, 'sdasasda');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `phone` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `phone`) VALUES
(40, 'test2311', '$2b$10$LOD92gWzuBkyTE51MLcR3eQfW2t4PJt7r9GKUoS.D4tfDCP7XE0lu', 'test', 2147483647),
(42, 'test2311', '$2b$10$ILEd/3gRQAw8cU1Nm5NV..7tvfFQ2iGMSzGJ9QNvNwqHs8g2yw4Ui', 'test2', 2147483647),
(44, 'test2311', '$2b$10$rmAnIxNYIa8LhWDgKs3WS.ZSln4ydNjSIkN7.oTiKk1q.UJz3UlTa', 'test22', 2147483647);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orderProducts`
--
ALTER TABLE `orderProducts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD UNIQUE KEY `orderNumber` (`orderNumber`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `orderProducts`
--
ALTER TABLE `orderProducts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=198;
--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT для таблицы `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
