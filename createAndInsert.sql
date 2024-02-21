CREATE TABLE books(
  id SERIAL,
  name_of_book VARCHAR(300),
  author VARCHAR(300),
  descript VARCHAR(1000),
  numb_of_page NUMERIC(5),
  cost NUMERIC(10,2),
  is_in_stock BOOLEAN
);


INSERT INTO books
(name_of_book, author, descript, numb_of_page, cost, is_in_stock)
VALUES
('Coool boook 1', 'author1', 'its a very cool book about some very bad cook', 200, 0.99, '0')

INSERT INTO books 
(author, name_of_book, cost, descript, numb_of_page, is_in_stock)
VALUES
('author2', 'Coool boook2', 12.99, 'its a cook', 333, '0'),
('author1', 'Coool boook 1', 0, 'its a very cool book about some very bad cook', 10, '1');