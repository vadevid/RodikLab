create table products (
    id SERIAL PRIMARY KEY,
    title varchar(50),
    price bigint
);

insert into products (title, price) values ('Apple', 123), ('Potato', 123), ('Dumplings', 123);