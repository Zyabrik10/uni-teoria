# MSSQL

## Select

`select` - funkcja, która zwraca nam pewne `kolumny` oraz `wierszy`. Może również obliczać wyrazy matematyczne.

```sql
select 1 + 1
```

```sql
select "name", "surname", "age"
```

## From

`from` - funkcja współpracuje z `select`. Wyjaśnia z której tabelki chcemy uzyskać `kolumny` oraz `wierszy`.

```sql
select employeeid, lastname, firstname, title
from employees;
```

## Where

`where` - funkcja, która współpracuje z `select` i 'from'. Używa się do filtracji kolumn.

```sql
select employeeid, lastname, firstname, title
from employees
where employeeid = 5;
```

```sql
select lastname, city
from employees
where country = 'USA'
```

## Where

`where` - funkcja, która współpracuje z `select` i 'from'. Używa się do filtracji kolumn.

```sql
select employeeid, lastname, firstname, title
from employees
where employeeid = 5;

select lastname, city
from employees
where country = 'USA'
```

## Like

`like` - funkcja współpracuje z `where`. Literal-y łańcucha (string template). Dynamicznie szuka podobieństwo do tekstu.

| Znak specjalny | Opis                |
| ---------------| -----               |
| %   | 0 lub więcej znaków            |
| _   | pojedynczy znak                |
|[ ]  | pojedynczy znak z zakresu      |
|[^ ] | pojedynczy znak z poza zakresu |

| operator| opis |
| --------| -----|
| LIKE 'BR%' | napisy zaczynające się od BR |
| LIKE 'Br%' | napisy zaczynające się od Br |
| LIKE '%een' | napisy kończące się na een |
| LIKE '%en%' | napisy mające w środku en |
| LIKE '_en' | pierwsza litera dowolna a  |następnie en
| LIKE '[CK]%' |pierwsza litera C lub K |
| LIKE '[S-V]%' | pierwsza litera S do V |
| LIKE 'M[^c]%' | pierwsza litera M druga litera  różna od c

```sql
select companyname
from customers
where companyname like '%restaurant%'
```

## Operatory logiczne

```sql
select productid, productname, supplierid, unitprice
from products
where (productname like 't%' or productid = 46)
and (unitprice > 16.00);
```

## Between

```sql
select productname, unitprice
from products
where unitprice between 10 and 20
```

```sql
select productname, unitprice
from products
where unitprice >= 10 and unitprice <= 20
```

## In

```sql
select companyname, country
from suppliers
where country in ('japan', 'italy')
```

Odpowiada składni:

```sql
select companyname, country
from suppliers
where country = 'japan' or country = 'italy';
```

## Null

`null` jest interpretowane jako wartość nieznana, brak wartości

```sql
select companyname, fax
from suppliers
where fax is null
```

## Order by

`order by` - służy do uporządkowania zbioru wynikowego.

```sql
select productid, productname, unitprice
from products
order by unitprice
```

```sql
select productid, productname, categoryid, unitprice
from products
order by 3,4
```

### Desc

`desk` - zmienia kierunek uporządkowania (**od większego do mniejszego**)

```sql
select productid, productname, unitprice
from products
order by unitprice DESC
```

## Zmiana nazw kolumn

```sql
select firstname as first, lastname as last,employeeid as 'employee id:'
from employees
```

## Wartości stałe

```sql
select firstname, lastname, 'pracownik'
from employees
```

## Kolumny wyliczane

```sql
select orderid, unitprice, unitprice * 1.05 as newunitprice
from [order details]
```

## Operacja na napisach

```sql
select firstname + ' ' + lastname as imie_nazwisko
from employees
```

```sql
select concat(firstname,' ',lastname) as imie_nazwisko
from employees
```

## CASE

```sql
select orderid, freight, 
    case
        when freight > 100 then 'high'
        when freight > 50 then 'medium'
        else 'low'
    end freightCategory
from orders
```

## Top n

Ograniczanie zbioru wynikowego

```sql
select top 5 orderid, productid, quantity
from [order details]
order by quantity desc
```

### WITH TIES

Fraza `WITH TIES` powoduje, że zwracane są dodatkowo wszystkie elementy o
wartościach takich jak element ostatni

```sql
select top 5 with ties orderid, productid, quantity
from [order details]
order by quantity desc
```

## Funkcje agregujące

| Funkcja agregująca | opis |
| ------- | --------------- |
| COUNT | liczba wierszy |
| COUNT (*) | liczba wierszy |
| MIN | wartość minimalna |
| MAX | wartość maksymalna |
| SUM | suma |
| AVG | wartość średnia |

Większość funkcji agregujących ignoruje wartości `Null`

Funkcja `COUNT` zlicza wiersze

```sql
select count (*)
from employees
```

```sql
select count (reportsto)
from employees
```

```sql
select avg(unitprice)
from products
```

```sql
select sum(quantity)
from [order details]
where productid = 1
```

## Group by

```sql
select productid ,sum(quantity) as total_quantity
from orderhist
group by productid
```

```sql
select productid, sum(quantity) as total_quantity
from orderhist
where productid >= 2
group by productid
```

```sql
select productid, sum(quantity) as total_quantity
from orderhist
group by productid
having sum(quantity)>=30
```

```sql
select productid, sum(quantity) as total_quantity
from orderhist
group by productid
having sum(quantity)>=30
```

### ROLLUP

```sql
select productid, orderid, sum(quantity) as total_quantity
from orderhist
group by rollup (productid, orderid)
order by productid, orderid
```

```sql
select productid, orderid, sum(quantity) as total_quantity
from orderhist
group by rollup (productid, orderid)
order by productid, orderid
```

```sql
select productid, orderid, sum(quantity) as total_quantity
from orderhist
group by productid, orderid
with rollup
order by productid, orderid
```

... jeszcze będzie informacja

## JOINS

### INNER

```sql
select buyer_name, s.buyer_id, qty
from buyers b inner join sales s
on b.buyer_id = s.buyer_id
```

```sql
select buyer_name, prod_name, qty
from buyers b inner join sales s
on b.buyer_id = s.buyer_id
inner join produce p
on s.prod_id = p.prod_id
```

### OUTER

```sql
select buyer_name, s.buyer_id, qty
from buyers b left outer join sales s
on b.buyer_id = s.buyer_id
```

### CROSS

```sql
select buyer_name, qty
from buyers cross join sales
```

### SELF JOIN

```sql
select a.buyer_id as buyer1, a.prod_id
,b.buyer_id as buyer2
from sales as a
join sales as b
on a.prod_id = b.prod_id
where a.buyer_id > b.buyer_id
```

## Łączenie kilku zbiorów wynikowych — operację na zbiorach

### UNION

```sql
select firstname + ' ' + lastname as name,city, postalcode
from employees
union
select companyname, city, postalcode
from customers
```

### INTERSECT

```sql
select country from customers
intersect
select country from suppliers
```

### EXCEPT

```sql
select customerid from orders where year(orderdate) = 1997
except
select customerid from orders where year(orderdate) = 1996
```

## Podzapytania subqueries

W miejscu w którym możemy użyć nazwy tabeli, możemy użyć podzapytania

```sql
select t.orderid, t.customerid
from (select orderid, customerid
from orders) as t
```

- Podzapytanie zwraca pojedynczą wartość
- Podzapytanie może być traktowane jako element wyrażenia
  - może pojawić się na liście polecenia select

  - może się pojawić w warunku

```sql
select productname, unitprice
, (select avg(unitprice) from products) as average
from products;
```

```sql
select productname, unitprice
, (select avg(unitprice) from products) as average
, unitprice - (select avg(unitprice) from products) as diff
from products;
```


```sql
select productname, unitprice
, (select avg(unitprice) from products) as average
, unitprice - (select avg(unitprice) from products) as diff
from products
where unitprice > (select avg(unitprice) from products)
```