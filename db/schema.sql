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

      CREATE TABLE IF NOT EXISTS `post` (
    `id` INTEGER NOT NULL auto_increment , 
    `name` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL, 
    'date_created' date,
    PRIMARY KEY (`id`)
    )

       CREATE TABLE IF NOT EXISTS `comment` (
    `id` INTEGER NOT NULL auto_increment , 
    `name` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL, 
    'date_created' date,
    PRIMARY KEY (`id`)
    )