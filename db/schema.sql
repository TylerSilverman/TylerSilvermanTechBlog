DROP DATABASE IF EXISTS socialTechBlog;
CREATE DATABASE socialTechBlog;
USE socialTechBlog;
CREATE TABLE IF NOT EXISTS `user` (
    `id` INTEGER NOT NULL auto_increment , 
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL, 
    PRIMARY KEY (`id`)
    )