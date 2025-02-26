# Architektury komputerowe jako złożone układy cyfrowe

## Podstawy techniki cyfrowej

`HDL(hardware description language)` - abstrakcyjna specyfikacja projektu w odpowiednim języku opisu sprzętu 
`CAD(computer aided design)` - różnorodnych narzędzi komputerowego wspomagania projektowania.

# Wielowrotnik układu cyfrowego

`Wielowrotnik` (ang. multiport element)` - wielozaciskowy element układu elektrycznego, którego zaciski wyprowadzone na zewnątrz można pogrupować w pary zwane wrotami.

![Wielowrotnik układu cyfrowego](image.png)

# Układy logiczne

`Układy logiczne` to dział techniki cyfrowe w której układy cyfrowe są konstruowane na poziomie bramek logicznych i przerzutników. Wszystkie układy cyfrowe dzielą się na dwie grupy

![Układy logiczne](image-1.png)

## Układy kombinacyjne

Stan wyjścia Y układu cyfrowego w danym momencie czasowym zależy ściśle od stanów jego wejść A,B,C.

![Układy kombinacyjne](image-2.png)

## Układy sekwencyjne

Stan wyjść Q w danym momencie czasowym zależy od aktualnego stanu wejść P oraz stanów wcześniejszych zapamiętanych w przerzutnikach RS.
Moment czasowy wyznacza zegar doprowadzony do wejścia X. 
Najogólniej można powiedzieć że układy sekwencyjne to takie które mają doprowadzony zegar CLK.

![Układy sekwencyjne](image-3.png)

## Liczenie binarne

![Liczenie binarne](image-4.png)

    1 + 1 = 1

    A + A = A

    A * A = A

## Wzór Shannon

![Wzór Shannon](image-5.png)

`Iloczyn n zmiennych` - jest wyrazem bądź `termem` iloczynowym n literałów.

`Iloczyn pełny` czyli iloczyn zawierający wszystkie literały jest `mintermem`.

`Suma n zmiennych` - jest wyrazem bądź `termem` sumacyjnym n literałów.

`Suma pełna` czyli suma zawierająca wszystkie literały jest `makstermem`.

---

![alt text](image-6.png)

Między obydwoma zasadami obowiązuje zasada równoważności form: dla każdej kanonicznej formy sumacyjnej można określić równoważną kanoniczną formę iloczynową.

## Reguły obowiązujących w algebrze Boole'a

Reguła przemienności iloczynu i sumy logicznej

```
A + B = B + A
A * B = B * A
```

Reguła łączności działań

```
(A + B) + C = A + (B + C)
(A * B) * C = A * (B * C)
```

Reguła rozdzielności działań

```
A * (B + C) = A * B + A * C
```

Obowiązuje następująca kolejność operacji: 

- nawiasy
- negacja
- iloczyn
- suma

![Podsumowanie reguł algebry Boole'a](image-7.png)

## Ważne prawa de Morgan’a pokazujące związki pomiędzy sumowaniem i mnożeniem logicznym

![alt text](image-8.png)

## Sygnał cyfrowy

![alt text](image-9.png)

Sygnały cyfrowe: a) okresowe i b) nieokresowe

## Kształt rzeczywistego sygnału cyfrowego 

![alt text](image-10.png)

Elementy charakterystyczne kształtu impulsu

## Podstawowe parametry układów cyfrowych

1. Szybkość działania układu cyfrowego
2. Moc rozpraszana w układzie
3. Odporność na zakłócenia
4. Obciążalność układu

![alt text](image-11.png)

## 2. Moc rozpraszana w układzie

Moc rozpraszana w układzie dla prądu stałego jest liczona wg. prostej formuły:

𝑃_𝐷=𝑈_𝑐𝑐∙ 𝑖_𝑐𝑐

Dla prądu przemiennego w czasie formuła jest następująca:

![alt text](image-12.png)

gdzie: 𝑖_𝑐𝑐 (𝑡) jest prądem czerpanym ze źródła zasilania w ciągu okresu T

## 3. Odporność na zakłócenia

Generalnie zakłócenia ingerujące w układ bez względu skąd pochodzą dzielimy na dwie grupy: 

- zakłócenia statyczne
- zakłócenia dynamiczne

Podział jest dokonywany ze względu na czas trwania impulsów zakłócających. Różnicą jest granica będąca średnim czasem propagacji sygnału przez funktor logiczny czyli bramkę.

- Zakłócenia statyczne to takie których czas trwania jest mniejszy od czasu propagacji sygnału przez bramkę
-Zakłócenia dynamiczne to takie gdzie relacja pomiędzy czasami jest akurat odwrotna

## 4. Obciążalność układu

Obciążalność wyjściowa układu wyrażona n ilością układów tej samej serii/rodziny jaka może być dołączona do wyjścia tego układu:

![alt text](image-13.png)

Bardzo często parametr ten jest nazywany Fenautem

## Podstawowe funktory logiczne / bramki:

Negacja - NOT, NIE - Inverter, negator
𝒀=~𝑨

Symbole według trzech standardów. Najpopularniejszy standard to ANSI

![alt text](image-14.png)

## Bufor

W tym miejscu trzeba jeszcze wspomnieć o funktorze będącym prostym buforem czyli układowym separatorem sygnału na wyjściu układu od jego wejścia.
Jest to układ który działa według następującej tabeli prawdy:

![alt text](image-15.png)

Ponieważ symbol jest taki sam jak w układach analogowych wzmacniacza sygnału trzeba tutaj pokazać istotną różnicę istniejącą między obydwoma układami.
Wzmacniacz jest układem liniowym a bufor nieliniowym.
Wynika to z różnych charakterystyk tych dwóch elementów czyli zależności 𝑈_𝑤𝑦  𝑜𝑑  𝑈_𝑤𝑒. Przedstawiają to dwa rysunki poniżej:

![alt text](image-16.png)

---

Suma logiczna  -  OR, LUB
               Y=A+B

![alt text](image-17.png)

---

Suma logiczna zanegowana (Negacja sumy logicznej) NOR, LUB-NIE
𝒀=(𝑨+𝑩) ̅

![alt text](image-18.png)

---

Iloczyn logiczny  - AND,  I
𝒀=𝑨⋅𝑩

![alt text](image-19.png)

![alt text](image-20.png)

Iloczyn logiczny zanegowany (Negacja iloczynu logicznego)  -  NAND,  I-NIE

![alt text](image-21.png)

Suma modulo – XOR, EXCLUSIVE-OR, WYŁACZNIE-LUB
𝒀=𝑨⊕𝑩

![alt text](image-22.png)