DROP DATABASE IF EXISTS baby_trackerDB;

CREATE DATABASE baby_trackerDB;

USE baby_trackerDB;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  firstName VARCHAR(45) NOT NULL,
  lastName VARCHAR(45) NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE babies (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  gender VARCHAR(45) NOT NULL, 
  birthday DATE NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE sleepEvents (
  id INT NOT NULL AUTO_INCREMENT,
  timeStart DATETIME  NULL,
  timeEnd DATETIME  NULL,  
  PRIMARY KEY (id)
);

CREATE TABLE eatingEvents (
  id INT NOT NULL AUTO_INCREMENT,
  timeStart DATETIME NULL,
  timeEnd DATETIME NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE vitals (
  id INT NOT NULL AUTO_INCREMENT,
  timestamp DATETIME NULL,
  weight VARCHAR(45) NULL,  
  height VARCHAR(45) NULL,  
  PRIMARY KEY (id)
);



-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
