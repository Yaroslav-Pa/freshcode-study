-- видалення записів з таблиць
-- видалення всіх записів
DELETE FROM users
RETURNING id, email, balance, created_at;
-- видалення конкретних користувачів
-- всіх користувачів з висотою 1.5 м
DELETE FROM users
WHERE height = 1.5;
-- видалення конкрентного запису
DELETE FROM users
WHERE id = 8;
