# Systemy baz danych

# Create table

```sql
CREATE TABLE mazurok.dbo.[User] (
   id_user INT IDENTITY(1,1) NOT NULL,
   username VARCHAR(50) NULL,
   email NVARCHAR(100) NOT NULL,
   password NVARCHAR(255) NOT NULL,
   CONSTRAINT PK_User PRIMARY KEY (id_user),
   CONSTRAINT UQ_Users_Email UNIQUE (email)
);
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
drop table mazurok.dbo.[Users];
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

# Insert

```sql
insert customers (customerid, companyname, contactname, contacttitle,  
       address, city, region, postalcode, country,  
       phone ,fax)  
values ('PECOF', 'Pecos Coffee Company', 'Michael Dunn','Owner',  
        '1900 Oak Street', 'Vancouver', 'BC','V3F 2K1', 'Canada',  
        '(604) 555-3392' ,'(604) 555-7293');
```

# UPDATE

```sql
update suppliers  
set phone = '12 423 512',  
    fax = '12 423 512'  
where supplierid = 2;
```

# DELETE

```sql
delete shippers  
where companyname = 'Fitch & Mather';
```