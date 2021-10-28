CREATE DATABASE chapter8

CREATE TABLE add_player (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    username VARCHAR (50) NOT NULL,
    email VARCHAR (50) NOT NULL,
    password VARCHAR (200) NOT NULL,
    experience VARCHAR (50) NOT NULL,
    lvl VARCHAR (50) NOT NULL,
    UNIQUE (username),
    UNIQUE (email)
);

-- test table
INSERT INTO add_player (username,email,password,experience,lvl)
VALUES ('te2','admon@rocketmail.com','qwerty123','win','3');