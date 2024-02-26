/*
  Створення таблиці
*/
/*
  текстові типи даних:
  TEXT = string у JS (необмежено про розмірам)
  BPCHAR -> необмежено про розмірам але видаляються пробіли

  CHAR (n) -> рядок фіксованої довжини до n символів
    CHAR (6)
      'test12' -> 'test12'
      'test1234' -> 'test12'
      'te' -> 'te    '
  VARCHAR (n) -> рядок фіксованої змінної довжини до n символів
    VARCHAR (6)
      'test12' -> 'test12'
      'test1234' -> 'test12'
      'te' -> 'te'


  INT === INTEGER

  точність - загальна кількість цифр у числі
  масштаб - кількість цифр після крапки в числі
  NUMERIC (точність, масштаб)
  NUMERIC === DECIMAL
*/
CREATE TABLE users(
  -- опис структури таблиці
  -- uuid - специфічна варіація айдішника
  -- id UUID DEFAULT gen_random_uuid(),
  -- Первинний ключ - комбінація обмежень NOT NULL і UNIQUE
  -- id SERIAL NOT NULL UNIQUE,
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(80) NOT NULL,
  last_name VARCHAR(80) NOT NULL CHECK(last_name != ''),
  -- не дозволяє встановлювати у стовпчик значення NULL
  -- обмеження стовпчика UNIQUE
  -- email VARCHAR(160) NOT NULL UNIQUE,
  email VARCHAR(160) NOT NULL CHECK(email != ''),
  balance NUMERIC(13,2) NOT NULL DEFAULT 0.00 
  -- CONSTRAINT дозволяє дати своє ім'я обмеженням CHECK, UNIQUE, PRIMARY KEY
  CONSTRAINT "balance must be positive" CHECK (balance >= 0),
  height NUMERIC(3,2) CHECK (height > 0.3 AND height < 3),
  is_male BOOLEAN,
  birthday DATE NOT NULL CHECK (birthday > '1930-01-01' AND birthday <= current_date ),
  created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT current_timestamp,
  -- обмеження таблиці
  UNIQUE (email),
  CONSTRAINT "first name not empty" CHECK(first_name != '')
);

DROP TABLE users;

INSERT INTO users 
(first_name, last_name, email, is_male, balance, birthday, height)
VALUES
( 'second', 'last', 'mail@mail.com', true, 450,'2005-12-28', 1.5 ),
( 'User', 'User', 'test@test.com', true,1500,'2005-12-28', 1.80 ),
( 'second', 'last', 'adbsahd@sdnsa.csas',true,1500, '1967-12-28', 1.1 ),
( 'second', 'last', 'mail1@mail.com', true,1500,'2005-12-28', 2.99);

INSERT INTO users 
(first_name, last_name, email, is_male, balance, birthday, height)
VALUES
( 'Jane', 'Doe', 'jdoe1@mail.com', true, 1500,'2005-12-28', 1.5 );

/*

  15
  0
  3234.11
  0.5
  1000.00000000000000000001

*/

CREATE TABLE test (
  a TEXT,
  b TEXT,
  -- унікальна група стовпчиків
  UNIQUE (a, b)
);

CREATE TABLE cars_to_dealerships (
  car_id INT,
  dealership_id INT,
  PRIMARY KEY (car_id, dealership_id)
);

INSERT INTO test
(a, b)
VALUES
('1234','lorem');