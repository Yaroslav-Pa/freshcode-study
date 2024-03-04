-- команда на отримання даних з бази даних (БД)
-- повернути всі дані з таблиці користувачів
SELECT *
FROM users;
-- повернути дані зі стовпчиків id, first_name, last_name
SELECT id, first_name, last_name
FROM users;
-- повернути дані зі стовпчиків id, first_name, last_name
-- і дані з balance але помножені на 40
SELECT id, first_name, last_name "Last Name",balance AS "USD balance", balance * 40 AS "UAH balance"
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
WHERE
EXTRACT(years from AGE(birthday)) = 23;
-- користувачі з повним ім'ям менше ніж 15 символів
SELECT id, first_name || ' ' || last_name AS full_name, email
FROM users
WHERE length(first_name || ' ' || last_name) < 16;
-- aбо
SELECT id, CONCAT (first_name, ' ', last_name) AS full_name, email,
length(CONCAT (first_name, ' ', last_name)) name_length
FROM users
WHERE length(CONCAT (first_name, ' ', last_name)) < 16;
-- підзапит
SELECT *
FROM (
  SELECT *, CONCAT (first_name, ' ', last_name) AS full_name
  FROM users
) AS "new_table"
WHERE length (full_name) < 16;
-- підзапити WITH
WITH new_table AS (
  SELECT *, CONCAT (first_name, ' ', last_name) AS full_name
  FROM users
), new_table_2 AS (
  SELECT * FROM new_table
)
SELECT * FROM new_table;
-- Пагінація у СУБД
SELECT * FROM users
WHERE balance > 0
-- кількість записів (аналог results у параметрах URL)
LIMIT 5
-- зсув (скільки записів пропустити)
OFFSET 5;
-- Агрегатні функції
/*
  avg - середне значення
  max - максимальне значення
  min - мінімальне значення
  sum - аналог reduce з js (акомулятор)
  count - кількість кортежів / рядків у запиті
*/
-- середній зріст користувачів
SELECT AVG(height) FROM users;
-- найбільший зріст користувача
SELECT MAX(height) FROM users;
-- мінімальний зріст
SELECT MIN(height) FROM users;
-- загальна кількість коштів на рахунках користувачів
SELECT SUM(balance) FROM users;
-- кількість користувачів які вищі ніж 1.6
SELECT COUNT(height)
FROM users
WHERE height > 1.6;
-- найбільший зріст чоловіків
SELECT max(height), min(height) FROM users
WHERE is_male;
-- найбільший зріст жінок
SELECT max(height) FROM users
WHERE NOT is_male;
-- найбільший зріст чоловіків і жінок
SELECT max(height), is_male
FROM users
-- створюємо групи записів для агрегатних функцій
GROUP BY is_male;
--
SELECT max(height), is_male
FROM users
WHERE balance > 1500
GROUP BY is_male;
-- знайти
-- мінімальний баланс користувачів
SELECT min(balance) FROM users;
-- мінімальну, середну та максимальню кількість коментарів
SELECT min(comments), avg(comments), max(comments) FROM users;
-- середню вагу чоловіків і жінок
SELECT avg("weight"), is_male
FROM users
GROUP BY is_male;
-- кількість людей з певним конкретним ім'ям (Rishi)
SELECT count(*) FROM users WHERE first_name = 'Rishi';
--
SELECT count(*), first_name FROM users  GROUP BY first_name;
-- * кількість чоловіків у віці від 33 до 47 років
SELECT count(*) 
FROM users
WHERE is_male AND 
EXTRACT(years from age(birthday)) >= 33 AND
EXTRACT(years from age(birthday)) <= 47; 
-- підзапити
SELECT count (*)
FROM (
  SELECT *, EXTRACT(years from age(birthday)) "age"
  FROM users
)
WHERE is_male AND age >= 33 AND age <= 47;
-- 
SELECT count(*) 
FROM users
WHERE is_male AND 
EXTRACT(years from age(birthday)) BETWEEN 33 AND 47;
-- кількість людей певного віку (5 людей 47 років, 6 людей 46)
SELECT count(age), age
FROM (
  SELECT *, EXTRACT(years from age(birthday)) "age"
  FROM users
)
GROUP BY age;
-- 
-- WHERE - фільтрація рядків (виконується одразу)
-- HAVING - фільтрація груп значень 
-- (виконується після агрегацій і може ними користуватися)
SELECT count(age), age
FROM (
  SELECT *, EXTRACT(years from age(birthday)) "age"
  FROM users
)
GROUP BY age
HAVING count(age) > 4;
-- Сортування результатів
-- відсортувати користувачів по висоті (в порядку зростання)
SELECT id, email, height
FROM users
ORDER BY height;
-- відсортувати користувачів по висоті в порядку зменшення
/*
  напрямки сортування:
    ASC - в порядку зростання
    DESC - в порядку зменшення
*/
SELECT id, email, height
FROM users
ORDER BY height DESC;
-- сортування користувачів по висоті (зростання) і id (зменшення)
SELECT id, email, height
FROM users
ORDER BY height ASC, email DESC;
-- Показати 5 найбагатшіх користувачів
SELECT id, email, balance FROM users
ORDER BY balance DESC
LIMIT 5;
-- Показати всіх користувачів і відсортувати їх
-- по їх віку (! не дата народження) від найстаршого
-- до наймолодшого
-- * з підзапитом
SELECT *, extract(year from age(birthday)) "вік"
FROM users
ORDER BY "вік" DESC;
-- з підзапитом
SELECT * FROM (
  SELECT *, extract(year from age(birthday)) "вік"
  FROM users
)
ORDER BY "вік" DESC;
-- Шаблони пошуку тексту
-- кількість користувачів ім'я яких розпочинається з B
SELECT first_name
FROM users
WHERE first_name = 'B';
/*
  Варіанти шаблонів:
    LIKE, ILIKE - прості шаблони (аналог глоббінгу)
    SIMILAR TO - гібрид LIKE і регулярок
    Regular Expression POSIX - регулярні вирази
*/
-- LIKE, ILIKE
/*
  Глоббінг 
    * - будь-яка кількість будь-яких символів
    ? - 1 будь-який символ
  LIKE
    % - будь-яка кількість будь-яких символів
    _ - 1 будь-який символ
*/
-- кількість користувачів ім'я яких розпочинається з B
SELECT count(first_name)
FROM users
WHERE first_name LIKE 'B%';
-- Всі користувачі ім'я яких розпоинається на R та містить 4 символа
SELECT *
FROM users
WHERE first_name LIKE 'R___';
-- Всі користувачі ім'я яких розпочинається на J і закінчується на e
SELECT * FROM users WHERE first_name LIKE 'j%e';
-- 
SELECT * FROM users WHERE first_name ILIKE 'j%e';
-- POSIX регулярки
/*
  ~ - відповідність регулярці з урахуванням регістру
  ~* - відповідність регулярці без урахування регістру
  !~ - невідповідність регулярці з урахуванням регістру
  !~* - невідповідність регулярці без урахування регістру
*/
-- кількість користувачів ім'я яких розпочинається з B
SELECT count(*) FROM users
WHERE first_name ~ 'B.{0,}';
--
SELECT count(*) FROM users
WHERE first_name ~ 'B.*';
-- SIMILAR TO
SELECT count(*) FROM users
WHERE first_name SIMILAR TO 'B%';