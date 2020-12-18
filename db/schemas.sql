DROP DATABASE IF EXISTS techBlog_db;

CREATE DATABASE techBlog_db;

USE techBlog_db;

CREATE TABLE IF NOT EXISTS user (
    id INTEGER NOT NULL auto_increment , 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    PRIMARY KEY (`id`)
    )

    CREATE TABLE IF NOT EXISTS blog (
        id INTEGER NOT NULL auto_increment , 
        name VARCHAR(255) NOT NULL, 
        description VARCHAR(255), 
        date_created DATETIME NOT NULL, 
        `needed_funding` FLOAT NOT NULL, 
        user_id INTEGER, 
        PRIMARY KEY (`id`), 
        FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
        )