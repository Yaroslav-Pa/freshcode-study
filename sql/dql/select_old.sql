-- команда на отримання даних з бази даних (БД)
-- повернути всі дані з таблиці користувачів
SELECT *
FROM users;
-- повернути дані зі стовпчиків id, first_name, last_name
SELECT id,
  first_name,
  last_name
FROM users;
-- повернути дані зі стовпчиків id, first_name, last_name
-- і дані з balance але помножені на 40
SELECT id,
  first_name,
  last_name "Last Name",
  balance AS "USD balance",
  balance * 40 AS "UAH balance"
FROM users;
-- повернути всіх чоловіків
SELECT *
FROM users
WHERE is_male = true;
-- або
SELECT *
FROM users
WHERE is_male;
-- для жінок
SELECT *
FROM users
WHERE NOT is_male;
-- знайти користувача певного віку 
SELECT *
FROM workers
WHERE EXTRACT(
    years
    from AGE(birthday)
  ) = 23;
-- користувачі full name < 15 символів
-- val1 || val2 = concat(val1,val2) ===> контатинація
-- char_length(val1) = length(full_name) ===> знаходження довжини
SELECT id,
  first_name || ' ' || last_name "full_name",
  email
FROM users
WHERE length(first_name || ' ' || last_name) < 16;
-- SElECT спочатку дивитться у талицю (FROM) потім вибирає за умови (WHERE) й лише потім повертає (SELECT), тож WHERE може не знати що ти зробив у SELECT (як "full_name" вище), fix:
--підзапит / subquerry
SELECT *
FROM (
    SELECT first_name || ' ' || last_name "full_name",
      length(first_name || ' ' || last_name) "name_length",
      *
    FROM users
  ) AS "new_table"
WHERE name_length < 16;
-- підзапити WITH
WITH new_table AS (
  SELECT *,
    CONCAT (first_name, ' ', last_name) AS full_name
  FROM users
),
new_table_2 AS (
  SELECT *
  FROM new_table
)
SELECT *
FROM new_table;
--Пагінація 
SELECT *
FROM users
WHERE balance > 0
LIMIT 5 -- кількість записів (results in URL)
  OFFSET 2 --зсув (скільки записів пропустити) 
;
-- Агрегатні функції
-- avg
-- max
-- min
-- sum - сума (акамулятор / reduce)
-- count - кількість рядків (кортежів)
SELECT AVG(height)
FROM users;
SELECT MAX(height)
FROM users;
-- GROUP BY = групувати за [полем]
-- використовувати якщо потрібно вивести щось крім полів з агрегаторами
SELECT MAX(height),
  is_male
FROM users
GROUP BY is_male;