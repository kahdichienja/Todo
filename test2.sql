-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2019 at 03:44 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test2`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `user_imgurl` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `email`, `username`, `comment`, `user_imgurl`, `post_id`, `created_at`, `updated_at`) VALUES
(1, 'agooclinton@gmail.com', 'Agoo Clinton', 'this pic is cool', 'https://lh5.googleusercontent.com/-0pHxG6KCmAM/AAAAAAAAAAI/AAAAAAAAEp4/z1JytdZXMRI/photo.jpg', 1, NULL, NULL),
(2, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'Nice Code', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 2, NULL, NULL),
(3, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'nice pic', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 1, NULL, NULL),
(4, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'trending', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 1, NULL, NULL),
(5, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'vbsdvhbdsvbsdbv', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 1, NULL, NULL),
(6, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'ihbgueihgeui', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 1, NULL, NULL),
(7, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'yghbuhbuiehbvewu', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 1, NULL, NULL),
(8, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'ngenen', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 2, NULL, NULL),
(9, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'vjdvjdv', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 2, NULL, NULL),
(10, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'ehuhuehu', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 2, NULL, NULL),
(11, 'betwelmusin@gmail.com', 'Bethwel Ronoh', 'vbjvjdbv', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  `file_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_imgurl` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `unique_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `email`, `message`, `file_url`, `username`, `user_imgurl`, `unique_hash`, `created_at`, `updated_at`) VALUES
(1, 'betwelmusin@gmail.com', 'Updating Column Attributes\r\nThe change method allows you to modify some existing column types to a new type or modify the column\'s attributes. For example, you may wish to increase the size of a string column. To see the change method in action, let\'s increase the size of the name column from 25 to 50:', 'https://ucarecdn.com/e9f25147-a3fd-486a-80ed-42df7fec9488/', 'Bethwel Ronoh', 'https://lh6.googleusercontent.com/-kOUM1ikSk68/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcY5k_fCLOA_vi3wN7Xm6m_VyzVpng/mo/photo.jpg', '8b337632b824b1901b6d46259c27d5d5030246ca', NULL, NULL),
(2, 'agooclinton@gmail.com', 'Rollback & Migrate In Single Command\r\nThe migrate:refresh command will roll back all of your migrations and then execute the  migrate command. This command effectively re-creates your entire database:', 'https://ucarecdn.com/a9de5f73-7ee6-40a9-a7ea-1cf615eb52be/', 'Agoo Clinton', 'https://lh5.googleusercontent.com/-0pHxG6KCmAM/AAAAAAAAAAI/AAAAAAAAEp4/z1JytdZXMRI/photo.jpg', '0cc0a566ed507db7f80459f3af57a18b0f0c8bd8', NULL, NULL),
(3, 'agooclinton@gmail.com', 'Phone', 'https://ucarecdn.com/54a2de7b-f606-43e9-b745-c6ce7f5af53e/', 'Agoo Clinton', 'https://lh5.googleusercontent.com/-0pHxG6KCmAM/AAAAAAAAAAI/AAAAAAAAEp4/z1JytdZXMRI/photo.jpg', '2a199b392cc1494b848813478f43866a1305fdde', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
