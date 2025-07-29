create table items
(

id int primary key,
description varchar (100),
price int
);

create table customers
(

id int primary key,
name varchar (100),
surname varchar (100)
);

INSERT INTO items(id, description, price)
VALUES
  (1, 'Small Desk', 100),
  (2, 'Large Desk', 300),
  (3, 'Fan', 80);
  
INSERT INTO customers(id, name, surname)
VALUES
  (1, 'Greg','Jones'),
  (2, 'Sandra','Jones'),
  (3, 'Scott','Scott'),
   (4, 'Trevor','Green'),
  (5, 'Melanie','Johnson');
select * from items 
select * from items where price>80
select * from items where price<300
select * from customers where surname='Smith'
select * from customers where surname='Jones'

select * from customers where surname!='Jones'