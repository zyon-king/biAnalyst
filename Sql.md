# SQL
* DELETE FROM = deletar dados
* UPDATE = atualizar dados
* INSERT INTO = inserir dados
* DROP TABLE = excluir tabela
* ALTER TABLE = alterar estrutura
* ADD COLUMN = adicionar coluna
* DROP COLUMN = remover coluna
* CREATE TABLE = criar tabela
* PRIMARY KEY = chave primária
* FOREIGN KEY = chave estrangeira
* UNIQUE = valor único
* CHECK = restrição
* DEFAULT = valor padrão
* INDEX = índice
* VIEW = visão virtual
* STORED PROCEDURE = procedimento armazenado
* TRIGGER = gatilho
* TRANSACTION = transação
* COMMIT = confirmar
* ROLLBACK = desfazer
* SELECT = campos
* FROM = tabela
* WHERE = condição
* GROUP BY = agrupar
* HAVING = condição após agrupamento
* ORDER BY = ordenar
* JOIN = junção de tabelas
* INNER JOIN = apenas correspondentes
* LEFT JOIN = todos da esquerda
* RIGHT JOIN = todos da direita
* FULL OUTER JOIN = todos os registros de ambas
* AS = apelido
* COUNT = contar registros
* SUM = somar valores
* AVG = média
* MIN = mínimo
* MAX = máximo
* DISTINCT = remover duplicados
* LIKE = correspondência parcial
* IN = pertence a lista
* BETWEEN = intervalo
* CASE = condicional
* EXISTS = existência
* NOT = negação
* IS NULL / IS NOT NULL = nulo
* LIMIT = limite de resultados (MySQL, PostgreSQL)
* OFFSET = ignorar linhas (MySQL, PostgreSQL)
* TOP = topo de resultados (SQL Server)

---

[Menu](#SQL)

## DELETE FROM

Remove registros de uma tabela que atendem a uma condição específica.

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã       | 10        | Loja A |
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |


`DELETE FROM quantidades`  
`WHERE Produto = 'Maçã' AND Loja = 'Loja A';`


**Retorna:**

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |

---

[Menu](#SQL)

## UPDATE

Atualiza registros existentes em uma tabela, alterando valores em colunas específicas.

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã       | 10        | Loja A |
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |


`UPDATE quantidades`
`SET Quantia = 15`
`WHERE Produto = 'Maçã' AND Loja = 'Loja A';`


**Retorna:**

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã       | 15        | Loja A |
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |

---

[Menu](#SQL)

## INSERT INTO

Insere novos registros (linhas) em uma tabela.

Tabela antes da execução:

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |

`INSERT INTO quantidades (Produto, Quantia, Loja) VALUES ('Cenoura', 25, 'Loja C');`


**Retorna:**

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |
| Cenoura  | 25      | Loja C |

---

[Menu](#SQL)

## DROP TABLE

Exclui uma tabela inteira do banco de dados.

Tabela antes da execução:

| Produto  | Quantia |
|----------|---------|
| Maçã     | 10      |

`DROP TABLE quantidades;`


**Retorna:**

(A tabela 'quantidades' não existe mais)

---

[Menu](#SQL)

## ALTER TABLE

Modifica a estrutura de uma tabela existente.

Tabela antes da execução:

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |

`ALTER TABLE quantidades ADD COLUMN Comentarios VARCHAR(255);`


**Retorna:**

| Produto  | Quantia | Loja   | Comentarios |
|----------|---------|--------|-------------|
| Maçã     | 10      | Loja A |             |
| Banana   | 5       | Loja B |             |

---

[Menu](#SQL)

## ADD COLUMN

Adiciona uma nova coluna a uma tabela existente.

Tabela antes da execução:

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |

`ALTER TABLE quantidades ADD COLUMN Cor VARCHAR(50);`


**Retorna:**

| Produto  | Quantia | Loja   | Cor |
|----------|---------|--------|-----|
| Maçã     | 10      | Loja A |     |
| Banana   | 5       | Loja B |     |

---

[Menu](#SQL)

## DROP COLUMN

Remove uma coluna de uma tabela existente.

Tabela antes da execução:

| Produto  | Quantia | Loja   | Comentarios |
|----------|---------|--------|-------------|
| Maçã     | 10      | Loja A |             |
| Banana   | 5       | Loja B |             |

`ALTER TABLE quantidades DROP COLUMN Comentarios;`


**Retorna:**

| Produto  | Quantia | Loja   |
|----------|---------|--------|
| Maçã     | 10      | Loja A |
| Banana   | 5       | Loja B |

---

[Menu](#SQL)

## CREATE TABLE

Cria uma nova tabela no banco de dados.

Tabela antes da execução:

(A tabela 'fornecedores' não existe)

`CREATE TABLE fornecedores (id INT PRIMARY KEY, nome VARCHAR(100), contato VARCHAR(100));`


**Retorna:**

| id | nome | contato |
|----|------|---------|
|    |      |         |

---

[Menu](#SQL)

## PRIMARY KEY

Define uma coluna como chave primária, garantindo valores únicos.

Tabela antes da execução:

| id | nome |
|----|------|
| 1  | Lápis|
| 1  | Caneta|

`ALTER TABLE produtos ADD PRIMARY KEY (id);`


**Retorna:**

(A inserção do 'id' 1 para a caneta falharia após a execução)

---

[Menu](#SQL)

## FOREIGN KEY

Cria um link entre duas tabelas.

Tabelas antes da execução:

**quantidades**
| id_produto | quantidade |
|------------|------------|
| 1          | 10         |

**fornecedores**
| id | nome |
|----|------|
| 1  | Fornecedor A |

`ALTER TABLE quantidades ADD FOREIGN KEY (id_produto) REFERENCES fornecedores(id);`


**Retorna:**

(Uma linha com `id_produto = 2` na tabela 'quantidades' falharia, pois não existe um fornecedor com `id = 2`)

  
