# Internet i jego zastosowanie

## Apache

- konfiguracja Apache

```apache
<Directory <path to directory>>
    AllowOverride
    Require
    Options
    DirectoryIndex
</Directory>
```

`AllowOverride` - służy do przepisywaniu konfiguracji (w plike .htaccess) (może być all none)

`Require` - all - znaczy, że każdy użytkownik musi przejść autoryzację, aby otrzymać dostęp do plików w tym katalogu, w przeciwnym przypadku  dostęp jest blokowany (all denied granted)

`Options` - Indexes ExecCGI

`DirectoryIndex` - ...

`Redirect` -  303 "/three" "http://example.com/other"

```apache
Redirect 303 "/three" "http://example.com/other"
```

### .htaccess

### Negocjacje

```txt
Proszę utworzyć w katalogu htdocs dwa pliki startowe - w języku polskim i
angielskim, a następnie tak skonfigurować serwer tak, aby wyświetlana była
strona w preferowanym języku przeglądarki
```

## Perl/CGI

- konfiguracja perl/cgi w Apache
- jak wyświetlać dane
- pracować z formularzem

Domyślnie obsługa CGI w serwerze Apache nie jest włączona. Aby ją włączyć należy w pliku
konfiguracyjnym:

- Odkomentować "LoadModule cgid_module modules/mod_cgid.so"
- Dodać opcje ExecCGI dla katalogu cgi-bin:
        AllowOverride None
        Options ExecCGI
        Require all granted
        Zrestartować serwer Apache.

- Dodać 

```apache
AddHandler cgi-script .cgi
```

## HTML

- Jak pisać formularzy na `HTML`
- `<input type="text" />` i wartości jego atrybutu `type`
- `<form action="" method=""></form>` i wartości jego atrybutu `method`, `action`

## PHP

- GET, POST requests
- jak określić użytą metodę (GET, POST)
- Jak zdefiniować zmiane.
- Jak otrzymać przekazane parametry z żądania GET lub POST
- Jak renderować dane na stronie
- if/else strukturę
- tablica, Tablica asocjacyjna (array, objects)
- metody pracy z tablicami
- pętla for/while
- metody przejścia po tablicach/tablicach asocjacyjnych
- jak podłączyć bazę danych (SQLite)
- jak otrzymywać i wyświetlać dane z bazy danych
- jak coś dodawać/usuwać do bazy danych