/*
  Використовується для внесення змін у структуру таблиці
  без її видалення
*/
-- додавання стовпця
ALTER TABLE users
ADD COLUMN
phone_number VARCHAR(15) NOT NULL 
DEFAULT '+38000000' ;
-- CHECK(phone_number != '');
-- видалення стовпця
ALTER TABLE users
DROP COLUMN phone_number;
-- Додавання обмежень
-- звичайні:
ALTER TABLE users
ADD CONSTRAINT "user check" CHECK(phone_number != '');
-- NOT NULL:
ALTER TABLE users
ALTER COLUMN created_at SET NOT NULL;
-- Видалення обмежень
-- звичайні:
ALTER TABLE users
DROP CONSTRAINT "users_email_key";
-- NOT NULL:
ALTER TABLE users
ALTER COLUMN created_at DROP NOT NULL;
-- зміна значення за замовчанням
ALTER TABLE users
ALTER COLUMN balance SET DEFAULT 1500;
-- видалення значення за замовчанням 1
ALTER TABLE users
ALTER COLUMN balance DROP DEFAULT;
-- видалення значення за замовчанням 2
ALTER TABLE users
ALTER COLUMN balance SET DEFAULT NULL;
-- змінити тип даних стовпчика
ALTER TABLE users
ALTER COLUMN balance TYPE NUMERIC (16,3);
-- зміна назви стовпчика
ALTER TABLE users
RENAME COLUMN name_1  TO first_name;
--  зміна назви таблиці
ALTER TABLE test
RENAME TO new_name;
-- комбінації
ALTER TABLE users
ADD COLUMN new_col_1 INT,
ADD COLUMN new_col_2 INT,
DROP COLUMN phone_number;