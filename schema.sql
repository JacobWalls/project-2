<<<<<<< HEAD
--commenting this out.  DO NOT USE.  USING SEQUELIZE  and JAWSDB INSTEAD!!!
-- CREATE DATABASE stacks_db;
-- USE stacks_db;


-- CREATE TABLE users(
--     id int NOT NULL AUTO_INCREMENT,
--     user_name VARCHAR (255) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE spending(
--     id int NOT NULL AUTO_INCREMENT,
--     housing INT NOT NULL,
--     utilities INT NOT NULL,
--     phone INT NOT NULL,
--     cable_internet INT NOT NULL,
--     food INT NOT NULL,
--     clothing INT NOT NULL,
--     beauty INT NOT NULL,
--     entertainment INT NOT NULL,
--     PRIMARY KEY (id)
-- );

-- INSERT INTO users (user_name) VALUES ("Lydia"), ("AJ"), ("JACOB"), ("KENTON");

-- INSERT INTO spending (housing, utilities, phone, cable_internet, food, clothing, beauty, entertainment) VALUES (100, 200, 300, 400, 500, 600, 700, 800)
=======
DROP DATABASE IF EXISTS stacks_db;
CREATE DATABASE stacks_db;
USE stacks_db;

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    user_name VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE spending(
    id int NOT NULL AUTO_INCREMENT,
    housing INT NOT NULL,
    utilities INT NOT NULL,
    phone INT NOT NULL,
    cable_internet INT NOT NULL,
    food INT NOT NULL,
    clothing INT NOT NULL,
    beauty INT NOT NULL,
    entertainment INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (user_name) VALUES ("Lydia"), ("AJ"), ("JACOB"), ("KENTON");

INSERT INTO spending (housing, utilities, phone, cable_internet, food, clothing, beauty, entertainment) VALUES (100, 200, 300, 400, 500, 600, 700, 800)
>>>>>>> Sequelize Spending and Users Tables
