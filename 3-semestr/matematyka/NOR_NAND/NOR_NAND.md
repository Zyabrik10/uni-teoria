# NOR NAND

## Wzory

```
a NAND b = ¬(a ^ b)
a NOR b = ¬(a ∨ b)
```

```
¬a = ¬(a ^ a) = a NAND a
¬a = ¬(a ∨ a) = a NOR a
```

```
a ^ b = ¬(¬(a ^ b)) = ¬(a NAND b) = (a NAND b) NAND (a NAND b)
a ∨ b = ¬(¬a ^ ¬b) = ¬a NAND ¬b = (a NAND a) NAND (b NAND b)
```

```
a ^ b = ¬(¬a ∨ ¬b) = ¬a NOR ¬b = (a NOR a) NOR (b NOR b)
a ∨ b = ¬(¬(a ∨ b)) = ¬(a NOR b) = (a NOR b) NOR (a NOR b)
```

Przykładowy wyraz:

    p → q

W NAND:

    p → q = ~p ∨ q = ~(p ^ ~q) = p NAND ~q = p NAND (q NAND q)

W NOR:

    p → q = ~p ∨ q = ~(~(~p ∨ q)) = ~(~p NOR q) = (~p NOR q) NOR (~p NOR q) = ((p NOR p) NOR q) NOR ((p NOR p) NOR q)