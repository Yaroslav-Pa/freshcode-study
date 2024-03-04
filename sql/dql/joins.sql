CREATE TABLE a (
  txt TEXT,
  num INT
);
--
CREATE TABLE B (
  txt TEXT
);
--
INSERT INTO a
(txt, num)
VALUES
('AAA', 5),
('AAB', 52),
('AAC', 10),
('ABC', 12323423),
('BAA', 214334),
('BBB', 1),
('BBC', 3),
('CBB', 2),
('CCC', 4);
--
INSERT INTO b
(txt)
VALUES
('AAA'),
('ABB'),
('AAC'),
('CAC'),
('CCC');
--
SELECT * FROM a;
SELECT * FROM b;
-- Декартовий добуток - всі рядки з а множатся на всі рядки з b
SELECT * FROM a, b;
-- UNION - об'єднання двух запитів (всі унацільні значення)
-- кількість і типи даних стовпчиків у запитах мають збігатися
SELECT txt FROM a
UNION
SELECT txt FROM b;
-- INTERSECT - перетин (значеня які є у обох запитах)
SELECT txt FROM a
INTERSECT
SELECT txt FROM b;
-- EXCEPT - віднімання (значення з першого запиту яких немає у другому запиті)
SELECT txt FROM a
EXCEPT
SELECT txt FROM b;
--
SELECT txt FROM b
EXCEPT
SELECT txt FROM a;
-- дізнатися id всіх користувачів, які робили замовлення
SELECT id FROM users
INTERSECT
SELECT user_id FROM orders;
-- дізнатися id всіх користувачів, які НЕ робили замовлення
SELECT id FROM users
EXCEPT
SELECT user_id FROM orders;
--
SELECT *
FROM a, b
WHERE a.txt = b.txt;

-- дізнатися email всіх користувачів, які робили замовлення
SELECT email
FROM users, orders
WHERE users.id = orders.user_id
GROUP BY email;
-- JOIN - з'єдання таблиць
SELECT email
FROM users
JOIN orders ON users.id = orders.user_id
GROUP BY email;
-- зв'язок декількох таблиць
SELECT u.id, p.*
FROM orders o
JOIN products_to_orders pto ON pto.order_id = o.id
JOIN products p ON pto.product_id = p.id
JOIN users u ON o.user_id = u.id
WHERE u.id = 1;
