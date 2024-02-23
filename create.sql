CREATE TABLE workers(
  id SERIAL,
  full_name VARCHAR(400),
  birthday DATE NOT NULL CHECK (birthday>'1900-01-01' AND birthday < current_date),
  salary NUMERIC(12,2)
);

DROP TABLE employees;