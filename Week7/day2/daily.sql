create actors  (
    id serial primary key,
    last_name varchar(50) not null,
    first_name varchar(50) not null,
    birth_date date not null
);


INSERT INTO actors (last_name, first_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03'),
('Rungassamy', 'Arasi', '2001-07-14');
SELECT COUNT(*) AS total_actors
FROM actors;

//ERROR:  invalid input syntax for type date: ""
//LINE 10: ('Rungassamy', '', '')
