ALTER TABLE workers 
ADD COLUMN holidays NUMERIC(5) DEFAULT 0 CHECK (holidays>=0),
ADD COLUMN email VARCHAR(100) UNIQUE;

ALTER TABLE workers
ADD CONSTRAINT email CHECK (email != ''),
ALTER COLUMN email SET NOT NULL,
ALTER COLUMN salary SET DEFAULT 500;

ALTER TABLE workers
RENAME TO employees;
