CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NOT NULL,
  category VARCHAR(200),
  price NUMERIC(13,2) NOT NULL,
  quantity INT,
  "description" TEXT,
  created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT current_timestamp
);
/*
  Види зв'язків сутностей у БД
    1 : 1 - один до одного
      ( у одної країни є один прапор, у одного прапора одна країна)
    1 : n - один до багатьох
      (в одній групі багато студентів, один студент занаходиться тількі в 1 групі)
      (у книжки один автор, у автора багато книжок)
    n : m - багато до багатьох
      (у одному чатику багато людей, у однієї людини може бато різних чатів)
      (в одному замовленні багато товарів, один товар може бути в багатьох замовленнях)
  По обов'язковковості сутності (по жорсткості)
    Жорсткі ( 1 ) - запис обов'язково пов'язана з записом з іншої таблиці
      ()
    Нежорсткі ( 0 ) - запис необов'язково пов'язана з записом з іншої таблиці

  По кількості таблиць (сутностей у зв'язку)
    - унарні (таблиця посилається на саму себе)
    - бінарні (дві таблиці)
    - тернарні
    - ...
*/
-- 1 : n
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  "status" TEXT,
  user_email INT NOT NULL REFERENCES users (email),
  created_at TIMESTAMP DEFAULT current_timestamp,
  updated_at TIMESTAMP DEFAULT current_timestamp
);

-- n : m
-- реалізюєть за допомоги "зв'язувальної таблиці"
CREATE TABLE products_to_orders (
  product_id INT NOT NULL REFERENCES products (id),
  order_id INT NOT NULL REFERENCES orders (id),
  quantity INT NOT NULL,
  PRIMARY KEY (product_id, order_id)
);

-- 0 : 1
CREATE TABLE countries_1 (
  id SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  -- flag_id INT NOT NULL REFERENCES flags_1 (id),
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE flags_1 (
  id SERIAL PRIMARY KEY,
  country_id INT REFERENCES countries_1,
  created_at TIMESTAMP DEFAULT current_timestamp,
  -- FOREIGN KEY (country_id) REFERENCES countries_1 (id)
);

ALTER TABLE countries_1
ADD COLUMN flag_id INT NOT NULL REFERENCES flags_1 (id);

-- INSERTS
INSERT INTO flags_1
(country_id)
VALUES
(NULL);

INSERT INTO countries_1
("name", flag_id)
VALUES
('Test', 1);

UPDATE flags_1
SET country_id = 2
WHERE id = 1;

-- 1 : 1
CREATE TABLE countries_2 (
  id SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  -- flag_id INT NOT NULL REFERENCES flags_2 (id),
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE flags_2 (
  id SERIAL PRIMARY KEY,
  country_id INT NOT NULL REFERENCES countries_2 (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  created_at TIMESTAMP DEFAULT current_timestamp
);

ALTER TABLE countries_2
ADD COLUMN flag_id INT NOT NULL REFERENCES flags_2 (id) ON DELETE CASCADE ON UPDATE CASCADE  DEFERRABLE INITIALLY DEFERRED;

--
-- DROP TABLE countries_2 CASCADE;
--
BEGIN; -- початок транзакції
INSERT INTO flags_2
(country_id)
VALUES
(1);

INSERT INTO countries_2
("name", flag_id)
VALUES
('Test', 1);
COMMIT; -- кінець транзакції
--
DELETE FROM countries_2;