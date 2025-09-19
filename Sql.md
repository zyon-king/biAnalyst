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

---

[Menu](#SQL)

## UNIQUE

Garante que todos os valores em uma coluna sejam únicos.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |
| Uva | 8 |

`ALTER TABLE quantidades`
`ADD UNIQUE (Produto);`

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

(A inserção do segundo registro de 'Uva' falharia, pois a restrição de 'UNIQUE' proíbe valores duplicados)

---

[Menu](#SQL)

## CHECK

Garante que os valores em uma coluna satisfaçam uma condição específica.

| Produto | Quantia |
|---|---|
| Laranja | 5 |
| Morango | -1 |
| Maçã | 10 |

`ALTER TABLE quantidades`
`ADD CHECK (Quantia > 0);`

**Retorna:**

| Produto | Quantia |
|---|---|
| Laranja | 5 |
| Maçã | 10 |

(A inserção do registro 'Morango' com valor -1 falharia, pois a restrição 'CHECK' proíbe valores menores que zero)

---

[Menu](#SQL)

## DEFAULT

Define um valor padrão para uma coluna, usado quando nenhum valor é especificado.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

`ALTER TABLE quantidades`
`ADD COLUMN Status VARCHAR(20) DEFAULT 'Disponível';`

**Retorna:**

| Produto | Quantia | Status |
|---|---|---|
| Uva | 10 | Disponível |
| Cenoura | 15 | Disponível |

(A nova coluna 'Status' será preenchida automaticamente com o valor 'Disponível' para novos registros, a menos que outro valor seja especificado)

---

[Menu](#SQL)

## INDEX

Melhora a velocidade das operações de busca de dados em uma coluna, como se fosse um índice de livro.

`CREATE INDEX idx_produto`
`ON quantidades (Produto);`

**Retorna:**

A busca por produtos na tabela 'quantidades' será muito mais rápida, pois o banco de dados não precisará examinar todas as linhas.

---

[Menu](#SQL)

## VIEW

Uma tabela virtual baseada no resultado de uma instrução `SELECT`.

`CREATE VIEW produtos_loja_a`
`AS SELECT Produto, Quantia`
`FROM quantidades`
`WHERE Loja = 'Loja A';`

**Retorna:**

Uma nova "tabela" chamada `produtos_loja_a` é criada, contendo apenas os dados da Loja A. Você pode usar um `SELECT *` nessa VIEW como se fosse uma tabela real.

---

[Menu](#SQL)

## STORED PROCEDURE

Um conjunto de instruções SQL pré-compiladas que podem ser salvas e executadas várias vezes, como uma função.

`CREATE PROCEDURE sp_get_produtos_loja(loja_nome VARCHAR(50))`
`BEGIN`
`SELECT Produto, Quantia`
`FROM quantidades`
`WHERE Loja = loja_nome;`
`END;`

**Retorna:**

O procedimento armazenado `sp_get_produtos_loja` é criado no banco de dados. Você pode executá-lo usando `CALL sp_get_produtos_loja('Loja A');`

---

[Menu](#SQL)

## TRIGGER

Um comando SQL que é executado automaticamente em resposta a um evento (como `INSERT`, `UPDATE` ou `DELETE`) em uma tabela específica.

`CREATE TRIGGER trg_log_estoque`
`AFTER INSERT ON quantidades`
`FOR EACH ROW`
`INSERT INTO logs (acao, data) VALUES ('Novo produto inserido', NOW());`

**Retorna:**

Um gatilho chamado `trg_log_estoque` é ativado. Cada vez que um novo produto é inserido, um registro é automaticamente adicionado na tabela de `logs`.

---

[Menu](#SQL)

## TRANSACTION

Uma sequência de uma ou mais operações de banco de dados tratadas como uma única unidade de trabalho. Inclui `COMMIT` e `ROLLBACK`.

`BEGIN TRANSACTION;`

**Retorna:**

A transação é iniciada. Todas as operações de banco de dados a partir de agora serão temporárias até que um `COMMIT` ou `ROLLBACK` seja executado.

---

[Menu](#SQL)

## COMMIT

Salva todas as alterações feitas em uma transação, tornando-as permanentes no banco de dados.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

`BEGIN TRANSACTION;`
`UPDATE quantidades SET Quantia = 20 WHERE Produto = 'Uva';`
`COMMIT;`

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 20 |
| Cenoura | 15 |

(A atualização da 'Uva' é salva permanentemente)

---

[Menu](#SQL)

## ROLLBACK

Desfaz todas as alterações feitas em uma transação, retornando o banco de dados ao seu estado original antes do `BEGIN TRANSACTION`.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

`BEGIN TRANSACTION;`
`UPDATE quantidades SET Quantia = 20 WHERE Produto = 'Uva';`
`ROLLBACK;`

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

(A atualização da 'Uva' é desfeita, e o valor original é restaurado)
  
