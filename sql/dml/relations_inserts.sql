-- 1 : n
INSERT INTO orders
(user_id, "status")
VALUES
(1, 'finished'),
(2, 'finished'),
(3, 'finished'),
(3, 'finished');
-- ERROR
INSERT INTO orders
(user_id, "status")
VALUES
(121321321, 'finished');
-- n : m
INSERT INTO products
("name", price, quantity)
VALUES
('phone', 15000, 120),
('book', 123, 500000),
('toothpaste', 50, 1513123321);
--
INSERT INTO products_to_orders
(product_id, order_id, quantity)
VALUES
(1, 2, 4),
(2, 1, 5),
(2, 3, 2),
(3, 3, 1);
--
SELECT u.first_name, u.last_name, p.name, p.price, pto.quantity
FROM products p
JOIN products_to_orders pto ON pto.product_id = p.id
JOIN orders o ON o.id = pto.order_id
JOIN users u ON u.id = o.user_id;