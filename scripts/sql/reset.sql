DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(80) NOT NULL CHECK(first_name != ''),
  last_name VARCHAR(80) NOT NULL CHECK(last_name != ''),
  email VARCHAR(160) NOT NULL UNIQUE CHECK(email != ''),
  balance NUMERIC(13,2) NOT NULL DEFAULT 0.00 CHECK (balance >= 0),
  height NUMERIC(3,2) CHECK (height > 0.3 AND height < 3),
  "weight" NUMERIC(5,2) CHECK ("weight" BETWEEN 0 AND 600),
  is_male BOOLEAN,
  comments SMALLINT NOT NULL DEFAULT 0 CHECK (comments >= 0),
  birthday DATE NOT NULL CHECK (birthday > '1930-01-01' AND birthday <= current_date ),
  created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT current_timestamp
);