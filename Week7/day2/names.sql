ALTER TABLE students ADD COLUMN birth_date DATE;

-- Then you can insert your data:
INSERT INTO students (last_name, first_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03'),
('Rungassamy', 'Arasi', '2001-07-14');

select * from students
SELECT first_name, last_name FROM students where id='2';

SELECT first_name, last_name FROM students 
where last_name='Benichou' and first_name='marc';

SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' 
   OR first_name = 'Marc';

SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a%';

SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a';

SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a_';

SELECT first_name, last_name FROM students

WHERE id IN ('1', '3');

