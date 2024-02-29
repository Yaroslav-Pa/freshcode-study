SELECT MIN(balance) FROM users;
SELECT MIN(comments), MAX(comments), AVG(comments) FROM users;
SELECT avg("weight"), is_male FROM users GROUP BY is_male;
SELECT COUNT(first_name), first_name FROM users GROUP BY first_name;
SELECT COUNT(is_male) FROM users WHERE is_male AND EXTRACT(years from AGE(birthday)) BETWEEN 33 and 47;