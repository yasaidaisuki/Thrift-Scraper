CREATE DATABASE thriftscraping;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

INSERT INTO users (email, password) VALUES ('pp@gmail.com', 'password123');