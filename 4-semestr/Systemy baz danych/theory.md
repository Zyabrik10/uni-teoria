# Systemy baz danych

# Create table

```sql
CREATE TABLE dbo.[User] (
   id_user INT IDENTITY(1,1) NOT NULL,
   username VARCHAR(50) NULL,
   email NVARCHAR(100) NOT NULL,
   password NVARCHAR(255) NOT NULL,
   CONSTRAINT PK_User PRIMARY KEY (id_user),
   CONSTRAINT UQ_Users_Email UNIQUE (email)
);
```

```sql
CREATE TABLE dbo.[User] (
   id_user INT IDENTITY(1,1) NOT NULL CONSTRAINT PK_User PRIMARY KEY,
   username VARCHAR(50) NULL,
   email NVARCHAR(100) NOT NULL CONSTRAINT UQ_Users_Email UNIQUE,
   password NVARCHAR(255) NOT NULL,
);
```

```sql
create table dbo.shippers  
(  
    shipperid int identity
        constraint pk_shippers  
            primary key,
    companyname nvarchar(40) not null,  
    phone nvarchar(24)  
)
```

```sql
create table dbo.newshippers  
(  
    shipperid int identity,  
    companyname nvarchar(40) not null,  
    phone nvarchar(24)  
)
```

`Defining order is important.`

Table name should have -s on the end like: Users, Customers, Orders

`IDENTITY([start_value], [increment_value])` - property is used for auto-incrementing integer columns, commonly for primary keys.

`CONSTRAINT [custom_name] [rule] [column_name]` - naming and enforcing rules. `The CONSTRAINT` keyword allows you to define rules (like primary keys, unique constraints, foreign keys) with a custom name.

| Feature         | Description                                                |
| --------------- | ---------------------------------------------------------- |
| `IDENTITY(1,1)` | Auto-increments id_user from 1, increasing by 1 each time. |
| `CONSTRAINT`    | Defines rules like PRIMARY KEY, UNIQUE, FOREIGN KEY, etc.  |
| `PRIMARY KEY`   | Ensures uniqueness and prevents NULL values.               |
| `UNIQUE`        | Ensures values in a column are unique across all rows.     |
| `FOREIGN KEY`   | Ensures referential integrity between tables.              |

# Drop table

```sql
drop table dbo.[Users];
```

# Transaction

[Link to theory](https://www.geeksforgeeks.org/sql-transactions/)

`Transaction` - is closed field of sql statements. It ensures that all changes made within it should either be completely successful or fully undone in case of failure. If error is occurred then rollback will ensure that no partial changes are saved.

ACID:
- `A`tomicity: The outcome of a transaction can either be completely successful or completely unsuccessful. The whole transaction must be rolled back if one part of it fails.
- `C`onsistency: Transactions maintain integrity restrictions by moving the database from one valid state to another.
- `I`solation: Concurrent transactions are isolated from one another, assuring the accuracy of the data.
- `D`urability: Once a transaction is committed, its modifications remain in effect even in the event of a system failure.

## The SQL Transaction Process

1) `BEGIN TRANSACTION`: Starts a transaction.
2) `COMMIT`: Commits the transaction, saving all changes made.
3) `ROLLBACK`: Rolls back the transaction, undoing all changes made since the BEGIN TRANSACTION.
4) `SAVEPOINT`: Marks a point within a transaction to which you can later roll back.

`COMMIT` and `ROLLBACK` are not just used both at the same time. They are used with `TRY...CATCH` for error handling.

```sql
BEGIN TRANSACTION;

BEGIN TRY
    -- Deduct $150 from Account A
    UPDATE Accounts
    SET Balance = Balance - 150
    WHERE AccountID = 'A';

    -- Add $150 to Account B
    UPDATE Accounts
    SET Balance = Balance + 150
    WHERE AccountID = 'B';

    -- If everything is successful, commit the transaction
    COMMIT;
END TRY
BEGIN CATCH
    -- If an error occurs, rollback all changes
    ROLLBACK;

    -- Optional: Print the error message
    PRINT 'Transaction failed: ' + ERROR_MESSAGE();
END CATCH;
```

If the first `UPDATE` succeeds but the second fails, the transaction `ROLLBACK` will roll back and undone the partial update, keeping data consistent.

# Identity

```sql
select @@identity; 
select scope_identity()
```

```sql
DBCC CHECKIDENT ('shippers'); 
SELECT IDENT_CURRENT( 'shippers')
DBCC CHECKIDENT ('shippers', RESEED, 3);
```

# Insert

```sql
insert customers (customerid, companyname, contactname, contacttitle,  
       address, city, region, postalcode, country,  
       phone ,fax)  
values ('PECOF', 'Pecos Coffee Company', 'Michael Dunn','Owner',  
        '1900 Oak Street', 'Vancouver', 'BC','V3F 2K1', 'Canada',  
        '(604) 555-3392' ,'(604) 555-7293');
```

```sql
insert shippers (companyname, phone)  
select companyname, phone from suppliers;
```

```sql
select supplierid as shipperid, companyname, phone  
into newshippers
from suppliers;
```

```sql
insert shippers (companyname, phone) 
values ('Taxi1', '911')
       (null, '911');
```

```sql
begin try  
   begin transaction  
  
   insert shippers (companyname, phone)  
   values ('Taxi1', '911');  
  
   insert shippers (companyname, phone)  
   values (null, '912');  
  
   commit  
end try  
begin catch  
    if @@trancount > 0
      rollback;    
    throw;  
end catch
```

# UPDATE

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

```sql
update suppliers  
set phone = '12 423 512',  
    fax = '12 423 512'  
where supplierid = 2;
```

```sql
update products  
set unitprice = unitprice * 1.15  
where categoryid = 2;
```

```sql
update products  
set unitprice = unitprice + 2  
where supplierid in (  
                      select supplierid  
                       from suppliers  
                       where country = 'USA'  
                     );
```

```sql
update products  
set unitprice = unitprice - 10  
where unitprice > (select avg(unitprice) from products);

update products  
set unitprice = unitprice - 10  
where unitprice > (select avg(unitprice) from products p2 
                   where p2.categoryid = products.categoryid);
```

# DELETE

```sql
delete shippers  
where companyname = 'Fitch & Mather';

delete shippers  
where shipperid = 4;

select * from orders  
where datediff(month, shippeddate, getdate()) >= 6;
```


```sql
delete [order details]  
where orderid in (  
      select orderid from orders  
      where datediff(month, shippeddate, getdate()) >= 6  
);

delete from orders  
where datediff(month, shippeddate, getdate()) >= 6;
```

# VIEW

`VIEW` is a virtual table. That means this table is not a table itself but a saved `select` action on table.

It helps you to reuse resulted table based on you `select` action.

```sql
create view _usa_users
as select * from [User] where Country = 'Ukraine'
```

Now if we want to get users in Ukraine, all we need to do is to get it from `view` and not to create `select` query from scratch.

```sql
select * from _usa_users
```

## UPDATE VIEW

In MSSQL:

```sql
create or alter view _usa_users
as 
select * from [User] 
where Country = 'Ukraine'
and id = 1

alter view _usa_users
as 
select * from [User] 
where Country = 'Ukraine'
and id = 1
```

---

In SQL:

```sql
create or replace view _usa_users
as 
select * from [User] 
where Country = 'Ukraine'
and id = 1
```

## DROP VIEW

```sql
drop view view_name;
```

```sql
drop view [User];
```

# PROCEDURE

Live example:

```SQL
create or alter proc _change_users_country
@fromCountry char(50),
@toCountry char(50)
as  
begin  
    if not exists (select * from [User] where Country = @fromCountry)  
       throw 50001, 'No user with such country', 1  
  
    begin tran
    
    begin try
    	update [User]
    	set Country = @toCountry
    	where Country = @fromCountry
    
    	commit
    end try
    begin catch
    	print ERROR_MESSAGE()
    	rollback
    end catch
end


exec _change_users_country 'China', 'Ukraine'
```

```sql
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;
```

# FUNCTION

```sql
create function f_customer_order_total (@customerid char(5))  
returns table  
as return (  
    select orderid, orderdate, customerid, total  
    from vw_order_total_3  
    where customerid = @customerid
)
```