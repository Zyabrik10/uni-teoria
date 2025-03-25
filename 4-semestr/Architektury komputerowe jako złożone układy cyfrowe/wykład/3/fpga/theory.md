# Podsumowanie `FPGA` i języków HDL

`FPGA` (Field Programmable Gate Array) to układy cyfrowe programowalne, zbudowane z konfigurowalnych bloków logicznych (CLB). Są one prostsze niż LAB-y w CPLD, ale występują w znacznie większej liczbie. Architektura `FPGA` jest fine-grained, w przeciwieństwie do coarse-grained w CPLD.

![`FPGA`](image.png)

## Podstawowe cechy `FPGA`:

- Producentami `FPGA` są m.in. Altera/Intel, Xilinx, Lattice, Cypress, QuickLogic.
- Duże `FPGA` zawierają dziesiątki tysięcy struktur CLB oraz pamięć i dodatkowe zasoby.
- Możliwość wielokrotnej konfiguracji - `FPGA` mogą być ulotne (bazujące na SRAM) lub nieulotne (technologia anty-fuse).
- Konfiguracja `FPGA` może odbywać się z wbudowanej pamięci lub zewnętrznej pamięci obsługiwanej przez procesor.

## Struktura `FPGA`

`FPGA` Xilinx są podzielone na konfigurowalne bloki logiczne (CLB), zawierające komórki logiczne (Logic Cells/Modules) oparte na 4-wejściowych tablicach LUT.
CLB mogą pracować jako układy kombinacyjne, rejest  rowe lub ich kombinacja.
Slicy to dwie identyczne komórki logiczne w CLB.

## Nowoczesne `FPGA`:
- Coraz częściej łączą pamięć, CPU, przetworniki ADC oraz inne funkcjonalności.
- Mogą zawierać rdzenie hard-core, czyli fabrycznie zaprogramowane bloki CLB realizujące konkretne funkcje (np. procesory).

---

# Języki HDL (Hardware Description Language)

Do programowania `FPGA` stosuje się języki opisu sprzętu (HDL), które umożliwiają zapis funkcyjny układów. Dwa główne języki to:

- `VHDL (Very High-Speed Integrated Circuit HDL)`
- `Verilog`

## Metody opisu układów cyfrowych:

Opis behawioralny - definiuje zależności wejścia/wyjścia, bez wskazania struktury sprzętowej. Może być:

- `Algorytmiczny` (sekwencyjny opis stanów)
- `Przepływowy` (dataflow) (przepływ danych, operacje logiczne)
- `Opis strukturalny` - opisuje układ jako zbiór połączonych modułów (np. bramek, rejestrów, sumatorów).

Poziom RTL (Register Transfer Level) – najczęściej stosowany w syntezie układów `FPGA`.

Podstawowe elementy `VHDL`:

- LIBRARY – deklaracja używanych bibliotek.
- ENTITY – definiuje interfejs komponentu (porty wejścia/wyjścia).
- ARCHITECTURE – określa funkcjonalność komponentu.

Przykładowy kod `VHDL` - przerzutnik D z zerowaniem asynchronicznym:

```vhdl
library IEEE;
use IEEE.std_logic_1164.all;

entity DFFC is
port ( signal clk : in std_logic;
         signal clr : in std_logic;
         signal d : in std_logic;
         signal q : out std_logic);
end entity DFFC;

architecture behavioral of DFFC is
begin
process (clk, clr)
begin
  if clr = '1' then
     q <= '0';
  elsif rising_edge (clk) then
    q <= d;
  end if;
end process;
end architecture behavioral;
```

Porównanie z Verilog dla 4-wejściowej bramki AND:
VHDL:

```vhdl
entity AND4gate is
port (A, B, C, D: in std_logic;
      Y: out std_logic);
end AND4gate;
architecture RTL of AND4gate is 
begin
Y<= A and B and C and D;
end RTL;
```

Verilog:

```verilog
module AND4gate (A,B,C,D,Y);
input A, B, C, D;
output Y;
assign Y = A & B & C & D;
endmodule
```

# Architektura komputerowa a `FPGA`

- Mikroprocesor - złożony układ cyfrowy do wykonywania procesów.
- Mikrokomputer - komputer z pojedynczym mikroprocesorem, np. PC, laptop.
- Mikrokontroler - jedno-układowy mikrokomputer.
- System komputerowy składa się z hardware i software, połączonych przez ISA (architekturę zestawu instrukcji).

# Podsumowanie
`FPGA` to programowalne układy cyfrowe o szerokim zastosowaniu. Programuje się je za pomocą języków HDL (VHDL, Verilog) na różnych poziomach abstrakcji, od opisu behawioralnego po szczegółowy opis strukturalny. Wraz z rozwojem technologii `FPGA` integrują coraz więcej funkcjonalności, zbliżając się do klasycznych systemów komputerowych.