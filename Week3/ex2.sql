create table students(
 id int primary key,
 last_name varchar(100),
 first_name varchar(100),
  birt_date varchar(100)
);

 insert into students(id,last_name,first_name,birt_date)
 values
 (1,'marc','benichou',02/11/1998),
 (2,'Yoan	','Cohen',03/12/2010),
 (3,'Lea','Benichou',27/07/1987),
 (4,'Amelia','Dux',07/04/1996),
 (5,'David','Grez',14/06/2003),
 (7,'Leah','Leah',14/06/2003),
 (6,'Omer','Simpson',03/10/1980);
 select *from students
 select first_name from students;
 select last_name from students;
 select last_name,first_name from students 
 where 
 id='2';
 select * from students 
 where 
 last_name='Benichou'and first_name='Marc';
 select * from students 
 where 
 last_name='Benichou'or first_name='Marc';
  SELECT * FROM students
WHERE first_name LIKE '%a%';
SELECT * FROM students
WHERE first_name LIKE 'a%';
SELECT * FROM students
WHERE first_name LIKE '%a';
SELECT * FROM students
WHERE first_name LIKE '%a_';
 select * from students 
 where 
 id='1'and id='3';
 SELECT * FROM students
WHERE birt_date >= '2000-01-01';

