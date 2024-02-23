UPDATE employees SET salary = 2000 WHERE full_name = 'Павла';

UPDATE employees SET birthday = make_date(1987, EXTRACT(month from birthday)::integer, EXTRACT(day from birthday)::integer) WHERE id = 4;

UPDATE employees SET salary = 700 WHERE salary < 400;

UPDATE employees SET holidays = 5 WHERE (id > 2 AND id <= 5);

UPDATE employees SET salary = salary + 200, full_name = 'Евген' WHERE full_name = 'Ярослав';