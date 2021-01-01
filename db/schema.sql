DROP DATABASE IF EXISTS socialTechBlog_db;

CREATE DATABASE socialTechBlog_db;

USE socialTechBlog_db;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES (2, 'test', 'test', 'test@test.com');

INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES (3, 'test', 'test', 'test@test.com');

INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES (4, 'test', 'test', 'test@test.com');

INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES (5,'test', 'test', 'test@test.com');
