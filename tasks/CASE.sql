SELECT id, 
CASE 
  WHEN manufacturer = 'Google' THEN 'Alphabet'
  WHEN manufacturer = 'Samsung' THEN 'Щось на корейській'
  ELSE 'інші'
END AS "бренд"
FROM products;