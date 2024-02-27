/*
  Створити таблицю Книжки у якої будуть наступні стовпчики:
    id,
    назва,
    автор
    кількість сторінок
    чи є в наявності
    синопсис,
    ціна

  також вставити 3 довіьні книжки у бд
*/

CREATE TABLE books(
  id SERIAL,
  title VARCHAR(200),
  author VARCHAR(200),
  synopsys VARCHAR(1000),
  page_number NUMERIC(6),
  is_avalible BOOLEAN,
  price NUMERIC (6,2)
);

INSERT INTO books
(title, author, synopsys, page_number, is_avalible, price)
VALUES
('Title 1', 'Author 1', 'loriem ipsum', 500, true, 537.99),
('Title 2', 'Author 2', 'loriem ipsum', 15646, true, 200),
('Title 3', 'Author 3', 'loriem ipsum', 12, false, 315.15);