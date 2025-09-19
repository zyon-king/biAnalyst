# SQL
[DELETE FROM = deletar dados](#delete-from)
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
* INNER JOIN = apenas correspondentes[DELETE FROM = deletar dados](#delete-from)
[UPDATE = atualizar dados](#update)
[INSERT INTO = inserir dados](#insert-into)
[DROP TABLE = excluir tabela](#drop-table)
[ALTER TABLE = alterar estrutura](#alter-table)
[ADD COLUMN = adicionar coluna](#add-column)
[DROP COLUMN = remover coluna](#drop-column)
[CREATE TABLE = criar tabela](#create-table)
[PRIMARY KEY = chave primária](#primary-key)
[FOREIGN KEY = chave estrangeira](#foreign-key)
[UNIQUE = valor único](#unique)
[CHECK = restrição](#check)
[DEFAULT = valor padrão](#default)
[INDEX = índice](#index)
[VIEW = visão virtual](#view)
[STORED PROCEDURE = procedimento armazenado](#stored-procedure)
[TRIGGER = gatilho](#trigger)
[TRANSACTION = transação](#transaction)
[COMMIT = confirmar](#commit)
[ROLLBACK = desfazer](#rollback)
[SELECT = campos](#select)
[FROM = tabela](#from)
[WHERE = condição](#where)
[GROUP BY = agrupar](#group-by)
[HAVING = condição após agrupamento](#having)
[ORDER BY = ordenar](#order-by)
[JOIN = junção de tabelas](#join)
[INNER JOIN = apenas correspondentes](#inner-join)
[LEFT JOIN = todos da esquerda](#left-join)
[RIGHT JOIN = todos da direita](#right-join)
[FULL OUTER JOIN = todos os registros de ambas](#full-outer-join)
[AS = apelido](#as)
[COUNT = contar registros](#count)
[SUM = somar valores](#sum)
[AVG = média](#avg)
[MIN = mínimo](#min)
[MAX = máximo)](#max)
[DISTINCT = remover duplicados](#distinct)
[LIKE = correspondência parcial](#like)
[IN = pertence a lista](#in)
[BETWEEN = intervalo](#between)
[CASE = condicional](#case)
[EXISTS = existência](#exists)
[NOT = negação](#not)
[IS NULL / IS NOT NULL = nulo](#is-null-is-not-null)
[LIMIT = limite de resultados (MySQL, PostgreSQL)](#limit)
[OFFSET = ignorar linhas (MySQL, PostgreSQL)](#offset)
[TOP = topo de resultados (SQL Server)](#top)

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
  
---

[Menu](#SQL)

## SELECT

Seleciona colunas específicas para exibir no resultado da consulta.



| id | Produto | Quantia | Loja |
|----|---------|---------|------|
| 1  | Maçã    | 10      | Loja A |
| 2  | Banana  | 5       | Loja B |

`SELECT Produto, Quantia FROM quantidades;`


**Retorna:**

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |

---

[Menu](#SQL)

## FROM

Especifica de qual tabela os dados serão buscados na consulta.



(Tabela 'quantidades')
| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |

`SELECT * FROM quantidades;`


**Retorna:**

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |

---

[Menu](#SQL)

## WHERE

Filtra os registros (linhas) para que apenas aqueles que satisfazem uma condição específica sejam retornados.



| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Cenoura | 25      | Loja A |

`SELECT * FROM quantidades WHERE Loja = 'Loja A';`


**Retorna:**

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Cenoura | 25      | Loja A |

---

[Menu](#SQL)

## GROUP BY

Agrupa linhas que têm valores idênticos em colunas específicas, frequentemente usado com funções de agregação (SUM, AVG, COUNT, etc.).

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Maçã    | 5       |
| Banana  | 8       |

`SELECT Produto, SUM(Quantia) FROM quantidades GROUP BY Produto;`


**Retorna:**

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã    | 15           |
| Banana  | 8            |

---

[Menu](#SQL)

## HAVING

Filtra grupos de linhas, criados pelo `GROUP BY`, com base em uma condição.

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã    | 15           |
| Banana  | 8            |

`SELECT Produto, SUM(Quantia) FROM quantidades GROUP BY Produto HAVING SUM(Quantia) > 10;`


**Retorna:**

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã    | 15           |

---

[Menu](#SQL)

## ORDER BY

Ordena o conjunto de resultados em ordem crescente (ASC) ou decrescente (DESC) com base em uma ou mais colunas.

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |
| Cenoura | 25      |

`SELECT * FROM quantidades ORDER BY Quantia ASC;`


**Retorna:**

| Produto | Quantia |
|---------|---------|
| Banana  | 5       |
| Maçã    | 10      |
| Cenoura | 25      |

---

[Menu](#SQL)

## JOIN

Combina linhas de duas ou mais tabelas com base em uma coluna relacionada entre elas.

**quantidades**
| Produto  | fornecedor_id |
|----------|---------------|
| Maçã     | 1             |
| Banana   | 2             |

**fornecedores**
| id | nome         |
|----|--------------|
| 1  | Fornecedor A |
| 2  | Fornecedor B |

`SELECT Produto, nome FROM quantidades JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`


**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |
| Banana  | Fornecedor B |

---

[Menu](#SQL)

## INNER JOIN

Retorna apenas os registros que possuem correspondência em ambas as tabelas (junção interna).

**quantidades**
| Produto | fornecedor_id |
|---------|---------------|
| Maçã    | 1             |
| Abacaxi | 3             |

**fornecedores**
| id | nome         |
|----|--------------|
| 1  | Fornecedor A |
| 2  | Fornecedor B |

`SELECT Produto, nome FROM quantidades INNER JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`


**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |

---

[Menu](#SQL)

## LEFT JOIN

Retorna todos os registros da tabela da esquerda, e os registros correspondentes da tabela da direita.

**quantidades (Tabela da esquerda)**
| Produto | fornecedor_id |
|---------|---------------|
| Maçã    | 1             |
| Abacaxi | 3             |

**fornecedores (Tabela da direita)**
| id | nome         |
|----|--------------|
| 1  | Fornecedor A |
| 2  | Fornecedor B |

`SELECT Produto, nome FROM quantidades LEFT JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`


**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |
| Abacaxi | NULL         |

---

[Menu](#SQL)

## RIGHT JOIN

Retorna todos os registros da tabela da direita, e os registros correspondentes da tabela da esquerda.

**quantidades (Tabela da esquerda)**
| Produto | fornecedor_id |
|---------|---------------|
| Maçã    | 1             |
| Abacaxi | 3             |

**fornecedores (Tabela da direita)**
| id | nome         |
|----|--------------|
| 1  | Fornecedor A |
| 2  | Fornecedor B |

`SELECT Produto, nome FROM quantidades RIGHT JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`

**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |
| NULL    | Fornecedor B |

---

[Menu](#SQL)

## FULL OUTER JOIN

Combina registros de duas tabelas, retornando todos os registros correspondentes e os registros sem correspondência de ambas as tabelas.

**tabela: quantidades**
| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**tabela: vendas_loja**
| Produto | Loja   | Vendas |
|---------|--------|--------|
| Maçã    | Loja A | 8      |
| Uva     | Loja A | 12     |

`SELECT * FROM quantidades FULL OUTER JOIN vendas_loja ON quantidades.Produto = vendas_loja.Produto;`

**Retorna:**

| Produto | Quantia | Loja_quantidades | Produto_vendas | Loja_vendas | Vendas |
|---------|---------|------------------|----------------|-------------|--------|
| Maçã    | 10      | Loja A           | Maçã           | Loja A      | 8      |
| Banana  | 5       | Loja B           | NULL           | NULL        | NULL   |
| NULL    | NULL    | NULL             | Uva            | Loja A      | 12     |

---

[Menu](#SQL)

## AS

Cria um apelido temporário para uma coluna ou tabela em uma consulta.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

`SELECT Produto AS Item, Quantia AS Estoque FROM quantidades;`

**Retorna:**

| Item   | Estoque |
|--------|---------|
| Maçã   | 10      |
| Banana | 5       |

---

[Menu](#SQL)

## COUNT

Conta o número de linhas que correspondem a uma condição especificada.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

`SELECT COUNT(Produto) FROM quantidades;`

**Retorna:**

| COUNT(Produto) |
|----------------|
| 2              |

---

[Menu](#SQL)

## SUM

Calcula a soma de todos os valores em uma coluna numérica.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

`SELECT SUM(Quantia) FROM quantidades;`

**Retorna:**

| SUM(Quantia) |
|--------------|
| 15           |

---

[Menu](#SQL)

## AVG

Calcula a média de todos os valores em uma coluna numérica.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

`SELECT AVG(Quantia) FROM quantidades;`

**Retorna:**

| AVG(Quantia) |
|--------------|
| 7.5          |

---

[Menu](#SQL)

## MIN

Encontra o valor mínimo em uma coluna selecionada.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

`SELECT MIN(Quantia) FROM quantidades;`

**Retorna:**

| MIN(Quantia) |
|--------------|
| 5            |

---

[Menu](#SQL)

## MAX

Encontra o valor máximo em uma coluna selecionada.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

`SELECT MAX(Quantia) FROM quantidades;`

**Retorna:**

| MAX(Quantia) |
|--------------|
| 10           |

---

[Menu](#SQL)

## DISTINCT

Remove valores duplicados de uma coluna no resultado da consulta.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Maçã    | 8       | Loja B |

`SELECT DISTINCT Produto FROM quantidades;`

**Retorna:**

| Produto |
|---------|
| Maçã    |
| Banana  |

---

[Menu](#SQL)

## LIKE

Usado na cláusula `WHERE` para encontrar padrões em dados.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Manga   | 8       | Loja B |

`SELECT * FROM quantidades WHERE Produto LIKE 'Ma%';`

**Retorna:**

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Manga   | 8       | Loja B |

---

[Menu](#SQL)

## IN

Usado na cláusula `WHERE` para especificar múltiplos valores possíveis para uma coluna.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Abacate | 12      | Loja C |

`SELECT * FROM quantidades WHERE Loja IN ('Loja A', 'Loja C');`

**Retorna:**

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Abacate | 12      | Loja C |

---

[Menu](#SQL)

## BETWEEN

Seleciona valores dentro de um intervalo.

**vendas**
| id | venda | data |
|----|-------|------|
| 1  | 150.00| 2024 |
| 2  | 50.00 | 2024 |
| 3  | 200.00| 2024 |
| 4  | 250.00| 2024 |

`SELECT * FROM vendas WHERE venda BETWEEN 100.00 AND 200.00;`


**Retorna:**

| id | venda | data |
|----|-------|------|
| 1  | 150.00| 2024 |
| 3  | 200.00| 2024 |

---

[Menu](#SQL)

## CASE

Cria lógicas condicionais para retornar valores diferentes.

**quantidades**
| Produto | Quantia |
|---------|---------|
| Maçã    | 12      |
| Banana  | 5       |
| Pera    | 20      |

`SELECT Produto, CASE WHEN Quantia > 10 THEN 'Em Estoque' ELSE 'Baixo Estoque' END AS Status FROM quantidades;`


**Retorna:**

| Produto | Status |
|---------|----------------|
| Maçã    | Em Estoque     |
| Banana  | Baixo Estoque  |
| Pera    | Em Estoque     |

---

[Menu](#SQL)

## EXISTS

Verifica se uma subconsulta retorna algum registro, otimizando a checagem de existência.

**Tabelas**
**pedidos**
| id_pedido | produto |
|-----------|---------|
| 101       | Maçã    |
| 102       | Banana  |

**quantidades**
| produto | loja |
|---------|------|
| Maçã    | Loja A |
| Banana  | Loja B |
| Pera    | Loja C |

`SELECT * FROM quantidades WHERE EXISTS (SELECT 1 FROM pedidos WHERE pedidos.produto = quantidades.produto);`

**Retorna:**

| produto | loja |
|---------|------|
| Maçã    | Loja A |
| Banana  | Loja B |

---

[Menu](#SQL)

## NOT

Nega uma condição, retornando registros que não a satisfazem.

**Tabela de produtos**
| produto | disponivel |
|---------|------------|
| Maçã    | true       |
| Banana  | false      |
| Pera    | true       |

`SELECT * FROM produtos WHERE NOT disponivel;`

**Retorna:**

| produto | disponivel |
|---------|------------|
| Banana  | false      |

---

[Menu](#SQL)

## IS NULL / IS NOT NULL

Testa se o valor de uma coluna é nulo (ausente) ou não é nulo.

**contatos**
| nome  | telefone | email |
|-------|----------|-------|
| Ana   | 111-111  | null  |
| João  | 222-222  | joao@ |
| Pedro | null     | null  |

`SELECT nome FROM contatos WHERE telefone IS NULL;`

**Retorna:**

| nome  |
|-------|
| Pedro |

---

[Menu](#SQL)

## LIMIT

Limita o número de registros retornados por uma consulta, útil para paginação.

**vendas**
| id | valor |
|----|-------|
| 1  | 150   |
| 2  | 200   |
| 3  | 120   |
| 4  | 250   |

`SELECT * FROM vendas ORDER BY valor DESC LIMIT 2;`

**Retorna:**

| id | valor |
|----|-------|
| 4  | 250   |
| 2  | 200   |

---

[Menu](#SQL)

## OFFSET

Pula um número de registros antes de iniciar a contagem do `LIMIT`, útil para paginação.

**vendas**
| id | valor |
|----|-------|
| 1  | 150   |
| 2  | 200   |
| 3  | 120   |
| 4  | 250   |

`SELECT * FROM vendas ORDER BY valor DESC LIMIT 2 OFFSET 1;`

**Retorna:**

| id | valor |
|----|-------|
| 2  | 200   |
| 1  | 150   |

---

[Menu](#SQL)

## TOP

Retorna um número específico de registros de um conjunto (Sintaxe do SQL Server).

**vendas**
| id | valor |
|----|-------|
| 1  | 150   |
| 2  | 200   |
| 3  | 120   |
| 4  | 250   |

`SELECT TOP 2 * FROM vendas ORDER BY valor DESC;`

**Retorna:**

| id | valor |
|----|-------|
| 4  | 250   |
| 2  | 200   |
