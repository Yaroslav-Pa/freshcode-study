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