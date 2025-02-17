# Grafy

## Spójność grafu

- `Graf spójny` - jeśli między każdą parą wierzchołków istnieje ścieżka.

- `Składowe spójności` - maksymalne spójne podgrafy.

- `Zbiór rozspajający` - zbiór wierzchołków, których usunięcie rozdziela graf.

- `Rozcięcie (zbiór krawędziowy)` - zbiór krawędzi, których usunięcie rozdziela graf.

- `Most (krawędź artykulacyjna)` - krawędź, której usunięcie zwiększa liczbę składowych spójności.

- `Spójność krawędziowa` - minimalna liczba krawędzi, które trzeba usunąć, aby uczynić graf niespójnym.

- `Spójność wierzchołkowa` - minimalna liczba wierzchołków, które trzeba usunąć, aby graf stał się niespójny.

## Rodzaje grafów

- `Graf prosty` - graf bez pętli i krawędzi wielokrotnych.

- `Graf pusty` - graf bez krawędzi.

- `Graf pełny` - każdy wierzchołek jest połączony z każdym innym.

- `Graf regularny` - wszystkie wierzchołki mają taki sam stopień.

- `Graf cykliczny` - graf tworzący zamknięty cykl.

- `Graf liniowy` - graf, w którym każdy wierzchołek ma stopień nie większy niż 2.

- `Graf kołowy` - każdy wierzchołek ma dwóch sąsiadów, tworząc cykl.

- `Graf platoński` - grafy odpowiadające wielościanom platońskim (np. sześcian, tetraedr).

- `Graf dwudzielny` - wierzchołki można podzielić na dwie grupy, tak aby nie było krawędzi wewnątrz żadnej z nich.

- `Graf pełny dwudzielny` - wszystkie wierzchołki pierwszej grupy są połączone ze wszystkimi wierzchołkami drugiej grupy.

- `Dopełnienie grafu` - graf zawierający wszystkie krawędzie, których brakuje w .

- `Pod graf` - graf utworzony przez wybór pewnych wierzchołków i krawędzi z oryginalnego grafu.

## Operacje na grafach

- `Suma grafów` - graf zawierający wierzchołki obu grafów oraz wszystkie ich krawędzie.

- `Zespolenie grafów` - podobne do sumy, ale bez powielania wierzchołków.

- `Odrzucanie wierzchołków lub krawędzi` - usunięcie wierzchołka i wszystkich incydentnych krawędzi.

- `Ściągnięcie krawędzi` - zastąpienie krawędzi  jednym wierzchołkiem, łączącym obie końcówki.

## Trasa, ścieżka, droga, cykl, długość trasy, obwód grafu

- `Trasa (ciąg)` - sekwencja wierzchołków, gdzie każda para kolejnych wierzchołków jest połączona krawędzią.

- `Ścieżka` - trasa, w której nie powtarzają się wierzchołki.

- `Droga` - ścieżka bez powtarzających się krawędzi.

- `Cykl` - ścieżka zaczynająca się i kończąca w tym samym wierzchołku.

- `Długość ścieżki` - liczba krawędzi w niej zawartych.

- `Obwód grafu` - najkrótszy cykl w grafie.