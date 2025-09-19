
## Excel - Fórmulas Avançadas
[🔗 PROCV (VLOOKUP)](#procv-vlookup)  
[🔗 SOMASE](#somase)  
[🔗 ÍNDICE](#index)  
[🔗 CORRESP](#corresp)  
[🔗 XLOOKUP](#xlookup)  
[🔗 FILTER](#filter)  
[🔗 SORT](#sort)  
[🔗 UNIQUE](#unique)  
[🔗 SUMIFS](#sumifs)  
[🔗 COUNTIFS](#countifs)  
[🔗 IFS](#ifs)  
[🔗 TEXTJOIN](#textjoin)  
[🔗 LET](#let)

---

[Menu](#excel---fórmulas-avançadas)

## PROCV (VLOOKUP)

Procura um valor na primeira coluna e retorna um valor de outra coluna na mesma linha.

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã       | 10        | Loja A |
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |

```excel
=PROCV("Banana"; A2:B4; 2; FALSO)
```

**Retorna:** 5

---

[Menu](#excel---fórmulas-avançadas)

## SUMIF

Soma valores com base em um critério.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=SOMASE(A2:A4; "Maçã"; B2:B4)
```

**Retorna:** 18

---

[Menu](#excel---fórmulas-avançadas)

## INDEX

Retorna o valor em uma célula específica dentro de um intervalo.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=ÍNDICE(B2:C4; 2; 1)
```

**Retorna:** 5

---

[Menu](#excel---fórmulas-avançadas)

## CORRESP

Retorna a posição de um valor em um intervalo.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=CORRESP("Banana"; A2:A4; 0)
```

**Retorna:** 2

---

[Menu](#excel---fórmulas-avançadas)

## XLOOKUP

Procura um valor em uma coluna e retorna o correspondente em outra.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=XLOOKUP("Banana"; A2:A4; B2:B4)
```

**Retorna:** 5

---

[Menu](#excel---fórmulas-avançadas)
## FILTER

Filtra dados com base em um critério.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=FILTER(A2:B4; B2:B4>6)
```

**Retorna:**

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Maçã    | 8       |

---

[Menu](#excel---fórmulas-avançadas)

## SORT

Ordena uma matriz.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=SORT(A2:B4; 2; 1)
```

**Retorna:**

| Produto | Quantia |
|---------|---------|
| Banana  | 5       |
| Maçã    | 8       |
| Maçã    | 10      |

---

[Menu](#excel---fórmulas-avançadas)

## UNIQUE

Retorna valores únicos de um intervalo.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=UNIQUE(A2:A4)
```

**Retorna:**

| Produto |
|---------|
| Maçã    |
| Banana  |

---

[Menu](#excel---fórmulas-avançadas)

## SUMIFS

Soma valores com múltiplos critérios.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=SUMIFS(B2:B4; A2:A4; "Maçã"; C2:C4; "Loja B")
```

**Retorna:** 8

---

[Menu](#excel---fórmulas-avançadas)

## COUNTIFS

Conta quantas linhas atendem múltiplos critérios.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=COUNTIFS(A2:A4; "Maçã"; C2:C4; "Loja B")
```

**Retorna:** 1

---

[Menu](#excel---fórmulas-avançadas)

## IFS

Testa múltiplas condições e retorna o primeiro resultado verdadeiro.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=IFS(B2>10; "Grande"; B2>5; "Médio"; VERDADEIRO; "Pequeno")
```

**Retorna (para B2=10):** Médio

---

[Menu](#excel---fórmulas-avançadas)

## TEXTJOIN

Une textos com separador, ignorando vazios.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=TEXTJOIN(", "; VERDADEIRO; A2:A4)
```

**Retorna:** Maçã, Banana, Maçã

---

[Menu](#excel---fórmulas-avançadas)

## LET

Define variáveis nomeadas para uso em uma fórmula.

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Maçã     | 8       | Loja B |

```excel
=LET(x; 5; y; 10; x+y)
```
**Retorna:** 15

