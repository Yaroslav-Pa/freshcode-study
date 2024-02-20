/*
  текстові типи даних:
  TEXT = string у JS (необмежено про розмірам)
  BPCHAR -> необмежено про розмірам але видаляються пробіли
  CHAR (n) -> рядок фіксованої довжини до n символів
    CHAR (6)
      'test12' -> 'test12'
      'test1234' -> 'test12'
      'te' -> 'te    '
  VARCHAR (n) -> рядок фіксованої змінної довжини до n символів
    VARCHAR (6)
      'test12' -> 'test12'
      'test1234' -> 'test12'
      'te' -> 'te'
  INT === INTEGER
  точність - загальна кількість цифр у числі
  масштаб - кількість цифр після крапки в числі
  NUMERIC (точність, масштаб)
  NUMERIC === DECIMAL
*/

CREATE TABLE users(
  -- опис структури таблиці
  --name DOMAIN
  id SERIAL,
  first_name VARCHAR(80),
  last_name VARCHAR(80),
  balance NUMERIC(13,2),
  is_male BOOLEAN,
  birthday DATE

)