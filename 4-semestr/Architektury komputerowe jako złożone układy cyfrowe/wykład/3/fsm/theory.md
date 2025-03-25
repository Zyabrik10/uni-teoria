# 1. Automaty stanów skończonych (FSM - Finite State Machine)

🔹 Definicja:

- Modelowanie systemów sekwencyjnych jako zbioru stanów i przejść.
- Każdy układ z pamięcią jest `FSM` — nawet komputer.

![FSM](FSM.png)

🔹 Kluczowe pojęcia:

- `Stan` - zestaw wartości w danym momencie.
- `Następny stan` - wynik działania zegara i wejść.
- `Gałąź` - przejście między stanami.
- `Diagram stanów` - wizualizacja FSM.

![FSM-2](FSM-2.png)

🔹 Typy automatów:

- `Moore` - wyjścia zależą tylko od stanu.
- `Mealy` - wyjścia zależą od stanu i wejść.

## 📌 2. Rejestry (Registers)

🔹 Rodzaje:

- `SISO` (Serial In Serial Out)
- `SIPO` (Serial In Parallel Out)
- `PISO` (Parallel In Serial Out)
- `PIPO` (Parallel In Parallel Out)
- `Shift registers` - rejestry przesuwające dane.

🔹 Ważne:

- Zbudowane na przerzutnikach typu `D`.
- `Rejestr 74198` - uniwersalny 8-bitowy rejestr.

## 📌 3. Multipleksery i Demultipleksery

🔹 Multiplekser (MUX):
- Wybiera jedno z `M` wejść i przekazuje na wyjście.

🔹 Demultiplekser / Dekoder:
- Rozdziela jedno wejście na `n` wyjść.

## 📌 4. Układy arytmetyczne

🔹 Sumatory:

- `Półsumator` - dodaje 2 bity.
- `Pełny sumator` - dodaje 3 bity (dwa wejścia + przeniesienie).
- 4-bitowe sumatory z funkcją przenoszenia.

🔹 Odejmowanie:

- `Pełny Subtractor` - obsługuje przeniesienie.

🔹 Liczby ze znakiem:

- `ZM` (znak-moduł)
- `U1` (uzupełnienie do 1)
- `U2` (uzupełnienie do 2)

## 📌 5. Jednostka ALU (Arithmetic Logic Unit)

- Wykonuje operacje arytmetyczne i logiczne.
- Przykład: `ALU 74181`
- Składa się z bloków logicznych, sumatorów, komparatorów.

## 📌 6. Układy programowalne PLD / CPLD / FPGA

🔹 Rodzaje:

- `SPLD` (Simple) - PAL, GAL
- `CPLD` (Complex)
- `FPGA` (Field Programmable Gate Array)

🔹 Cechy:

- `PAL` - jednokrotna konfiguracja.
- `GAL` - wielokrotna konfiguracja.
- `CPLD` - wiele SPLD połączonych liniami PIA.
- `FPGA` - złożona struktura z blokami logicznymi (LAB) i tablicami LUT (Look-Up Table).

🔹 LUT (Look-Up Table):

Realizuje dowolną funkcję logiczną.
Może działać jako przerzutnik, zatrzask.

## 📌 7. Dodatkowe układy

- `Komparatory` - porównują liczby (np. SN7485)
- `Sumatory dziesiętne` - korekta wyniku powyżej 9
- `Kontrolery parzystości` - sprawdzanie poprawności danych