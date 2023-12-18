-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2023 at 10:48 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jetdev_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `nickName` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `nickName`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'Article 1', 'talib', 'Article 1 content', '2023-12-17 13:34:07', '2023-12-17 13:34:07'),
(2, 'Article 2', 'talib', 'Article 2 content', '2023-12-17 13:34:21', '2023-12-17 13:34:21'),
(3, 'Article 3', 'talib', 'Article 3 content', '2023-12-17 13:34:30', '2023-12-17 13:34:30'),
(4, 'Article 4', 'talib', 'Article 4 content', '2023-12-17 13:34:39', '2023-12-17 13:34:39'),
(5, 'Article 5', 'talib', 'Article 5 content', '2023-12-17 13:34:47', '2023-12-17 13:34:47'),
(6, 'Article 6', 'talib', 'Article 6 content', '2023-12-17 13:34:56', '2023-12-17 13:34:56'),
(7, 'Article 7', 'talib', 'Article 7 content', '2023-12-17 13:35:03', '2023-12-17 13:35:03'),
(8, 'Article 8', 'talib', 'Article 8 content', '2023-12-17 13:35:11', '2023-12-17 13:35:11'),
(9, 'Article 9', 'talib', 'Article 9 content', '2023-12-17 13:35:17', '2023-12-17 13:35:17'),
(10, 'Article 10', 'talib', 'Article 10 content', '2023-12-17 13:35:27', '2023-12-17 13:35:27'),
(11, 'Article 11', 'talib', 'Article 11 content', '2023-12-17 13:35:33', '2023-12-17 13:35:33');

-- --------------------------------------------------------

--
-- Table structure for table `article_comments`
--

CREATE TABLE `article_comments` (
  `id` int(11) NOT NULL,
  `articleId` int(11) NOT NULL,
  `parentCommentId` int(11) NOT NULL DEFAULT 0,
  `nickName` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `article_comments`
--

INSERT INTO `article_comments` (`id`, `articleId`, `parentCommentId`, `nickName`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 1, 0, 'talib', 'Article 1 comment 1', '2023-12-17 13:39:11', '2023-12-17 13:39:11'),
(2, 1, 0, 'talib', 'Article 1 comment 2', '2023-12-17 13:39:58', '2023-12-17 13:39:58'),
(3, 1, 0, 'talib', 'Article 1 comment 3', '2023-12-17 13:40:06', '2023-12-17 13:40:06'),
(4, 1, 1, 'talib', 'Article 1 comment 1 child', '2023-12-17 13:40:20', '2023-12-17 13:40:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_comments`
--
ALTER TABLE `article_comments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `article_comments`
--
ALTER TABLE `article_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
