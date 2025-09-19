-- DELETE FROM
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'DELETE FROM',
    'DELETE FROM quantidades
WHERE Produto = ''Maçã'' AND Loja = ''Loja A'';',
    'Remove registros de uma tabela que atendem a uma condição específica.

|   |    A     |     B     |  C    |
|---|----------|-----------|-------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã      | 10        | Loja A |
|4| Banana    | 5         | Loja B |
|5| Maçã      | 8         | Loja B |

**Retorna:**

|   |    A     |     B     |  C    |
|---|----------|-----------|-------|
|1| **Produto**|**Quantia**|**Loja**|
|4| Banana    | 5         | Loja B |
|5| Maçã      | 8         | Loja B |'
);

-- UPDATE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'UPDATE',
    'UPDATE quantidades
SET Quantia = 15
WHERE Produto = ''Maçã'' AND Loja = ''Loja A'';',
    'Atualiza registros existentes em uma tabela, alterando valores em colunas específicas.

|   |    A     |     B     |  C    |
|---|----------|-----------|-------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã      | 10        | Loja A |
|4| Banana    | 5         | Loja B |
|5| Maçã      | 8         | Loja B |

**Retorna:**

|   |    A     |     B     |  C    |
|---|----------|-----------|-------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã      | 15        | Loja A |
|4| Banana    | 5         | Loja B |
|5| Maçã      | 8         | Loja B |'
);

-- INSERT INTO
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'INSERT INTO',
    'INSERT INTO quantidades (Produto, Quantia, Loja) VALUES (''Cenoura'', 25, ''Loja C'');',
    'Insere novos registros (linhas) em uma tabela.

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |
| Cenoura | 25 | Loja C |'
);

-- DROP TABLE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'DROP TABLE',
    'DROP TABLE quantidades;',
    'Exclui uma tabela inteira do banco de dados.

| Produto | Quantia |
|----------|---------|
| Maçã | 10 |
| Banana | 5 |

**Retorna:**

(A tabela ''quantidades'' não existe mais)'
);

-- ALTER TABLE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'ALTER TABLE',
    'ALTER TABLE quantidades ADD COLUMN Comentarios VARCHAR(255);',
    'Modifica a estrutura de uma tabela existente.

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| Produto | Quantia | Loja | Comentarios |
|----------|---------|--------|-------------|
| Maçã | 10 | Loja A | |
| Banana | 5 | Loja B | |'
);

-- ADD COLUMN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'ADD COLUMN',
    'ALTER TABLE quantidades ADD COLUMN Cor VARCHAR(50);',
    'Adiciona uma nova coluna a uma tabela existente.

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| Produto | Quantia | Loja | Cor |
|----------|---------|--------|-----|
| Maçã | 10 | Loja A | |
| Banana | 5 | Loja B | |'
);

-- DROP COLUMN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'DROP COLUMN',
    'ALTER TABLE quantidades DROP COLUMN Comentarios;',
    'Remove uma coluna de uma tabela existente.

| Produto | Quantia | Loja | Comentarios |
|----------|---------|--------|-------------|
| Maçã | 10 | Loja A | |
| Banana | 5 | Loja B | |

**Retorna:**

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |'
);

-- CREATE TABLE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'CREATE TABLE',
    'CREATE TABLE fornecedores (id INT PRIMARY KEY, nome VARCHAR(100), contato VARCHAR(100));',
    'Cria uma nova tabela no banco de dados.

(A tabela ''fornecedores'' não existe)

**Retorna:**

| id | nome | contato |
|----|------|---------|
| | | |'
);

-- PRIMARY KEY
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'PRIMARY KEY',
    'ALTER TABLE produtos ADD PRIMARY KEY (id);',
    'Define uma coluna como chave primária, garantindo valores únicos.

| id | nome |
|----|------|
| 1 | Lápis |
| 1 | Caneta|

**Retorna:**

(A inserção do ''id'' 1 para a caneta falharia)'
);

-- FOREIGN KEY
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'FOREIGN KEY',
    'ALTER TABLE quantidades ADD FOREIGN KEY (id_produto) REFERENCES fornecedores(id);',
    'Cria um link entre duas tabelas.

**quantidades**
| id_produto | quantidade |
|------------|------------|
| 1 | 10 |

**fornecedores**
| id | nome |
|----|------|
| 1 | Fornecedor A |
| 2 | Fornecedor B |

**Retorna:**

(Uma linha com `id_produto = 2` na tabela ''quantidades'' falharia, pois não existe um fornecedor com `id = 2`)'
);

-- UNIQUE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'UNIQUE',
    'ALTER TABLE quantidades
ADD UNIQUE (Produto);',
    'Garante que todos os valores em uma coluna sejam únicos.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |
| Uva | 8 |

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

(A inserção do segundo registro de ''Uva'' falharia, pois a restrição de ''UNIQUE'' proíbe valores duplicados)'
);

-- CHECK
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'CHECK',
    'ALTER TABLE quantidades
ADD CHECK (Quantia > 0);',
    'Garante que os valores em uma coluna satisfaçam uma condição específica.

| Produto | Quantia |
|---|---|
| Laranja | 5 |
| Morango | -1 |
| Maçã | 10 |

**Retorna:**

| Produto | Quantia |
|---|---|
| Laranja | 5 |
| Maçã | 10 |

(A inserção do registro ''Morango'' com valor -1 falharia, pois a restrição ''CHECK'' proíbe valores menores que zero)'
);

-- DEFAULT
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'DEFAULT',
    'ALTER TABLE quantidades
ADD COLUMN Status VARCHAR(20) DEFAULT ''Disponível'';',
    'Define um valor padrão para uma coluna, usado quando nenhum valor é especificado.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

**Retorna:**

| Produto | Quantia | Status |
|---|---|---|
| Uva | 10 | Disponível |
| Cenoura | 15 | Disponível |

(A nova coluna ''Status'' será preenchida automaticamente com o valor ''Disponível'' para novos registros, a menos que outro valor seja especificado)'
);

-- INDEX
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'INDEX',
    'CREATE INDEX idx_produto
ON quantidades (Produto);',
    'Melhora a velocidade das operações de busca de dados em uma coluna, como se fosse um índice de livro.

**Retorna:**

A busca por produtos na tabela ''quantidades'' será muito mais rápida, pois o banco de dados não precisará examinar todas as linhas.'
);

-- VIEW
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'VIEW',
    'CREATE VIEW produtos_loja_a
AS SELECT Produto, Quantia
FROM quantidades
WHERE Loja = ''Loja A'';',
    'Uma tabela virtual baseada no resultado de uma instrução `SELECT`.

**Retorna:**

Uma nova "tabela" chamada ''produtos_loja_a'' é criada, contendo apenas os dados da Loja A. Você pode usar um `SELECT *` nessa VIEW como se fosse uma tabela real.'
);

-- STORED PROCEDURE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'STORED PROCEDURE',
    'CREATE PROCEDURE sp_get_produtos_loja(loja_nome VARCHAR(50))
BEGIN
SELECT Produto, Quantia
FROM quantidades
WHERE Loja = loja_nome;
END;',
    'Um conjunto de instruções SQL pré-compiladas que podem ser salvas e executadas várias vezes, como uma função.

**Retorna:**

O procedimento armazenado ''sp_get_produtos_loja'' é criado no banco de dados. Você pode executá-lo usando `CALL sp_get_produtos_loja(''Loja A'');`'
);

-- TRIGGER
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'TRIGGER',
    'CREATE TRIGGER trg_log_estoque
AFTER INSERT ON quantidades
FOR EACH ROW
INSERT INTO logs (acao, data) VALUES (''Novo produto inserido'', NOW());',
    'Um comando SQL que é executado automaticamente em resposta a um evento (como `INSERT`, `UPDATE` ou `DELETE`) em uma tabela específica.

**Retorna:**

Um gatilho chamado ''trg_log_estoque'' é ativado. Cada vez que um novo produto é inserido, um registro é automaticamente adicionado na tabela de `logs`.'
);

-- TRANSACTION
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'TRANSACTION',
    'BEGIN TRANSACTION;',
    'Uma sequência de uma ou mais operações de banco de dados tratadas como uma única unidade de trabalho. Inclui `COMMIT` e `ROLLBACK`.

**Retorna:**

A transação é iniciada. Todas as operações de banco de dados a partir de agora serão temporárias até que um `COMMIT` ou `ROLLBACK` seja executado.'
);

-- COMMIT
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'COMMIT',
    'BEGIN TRANSACTION;
UPDATE quantidades SET Quantia = 20 WHERE Produto = ''Uva'';
COMMIT;',
    'Salva todas as alterações feitas em uma transação, tornando-as permanentes no banco de dados.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 20 |
| Cenoura | 15 |

(A atualização da ''Uva'' é salva permanentemente)'
);

-- ROLLBACK
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'ROLLBACK',
    'BEGIN TRANSACTION;
UPDATE quantidades SET Quantia = 20 WHERE Produto = ''Uva'';
ROLLBACK;',
    'Desfaz todas as alterações feitas em uma transação, retornando o banco de dados ao seu estado original antes do `BEGIN TRANSACTION`.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

(A atualização da ''Uva'' é desfeita, e o valor original é restaurado)'
);

-- SELECT
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'SELECT',
    'SELECT Produto, Quantia FROM quantidades;',
    'Seleciona colunas específicas para exibir no resultado da consulta.

| id | Produto | Quantia | Loja |
|----|---------|---------|------|
| 1  | Maçã    | 10      | Loja A |
| 2  | Banana  | 5       | Loja B |

**Retorna:**

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |'
);

-- FROM
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'FROM',
    'SELECT * FROM quantidades;',
    'Especifica de qual tabela os dados serão buscados na consulta.

(Tabela ''quantidades'')
| Produto | Quantia |
|---------|---------|
| Maçã | 10 |
| Banana | 5 |

**Retorna:**

| Produto | Quantia |
|---------|---------|
| Maçã | 10 |
| Banana | 5 |'
);

-- WHERE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'WHERE',
    'SELECT * FROM quantidades WHERE Loja = ''Loja A'';',
    'Filtra os registros (linhas) para que apenas aqueles que satisfazem uma condição específica sejam retornados.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |
| Cenoura | 25 | Loja A |

**Retorna:**

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Cenoura | 25 | Loja A |'
);

-- GROUP BY
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'GROUP BY',
    'SELECT Produto, SUM(Quantia) FROM quantidades GROUP BY Produto;',
    'Agrupa linhas que têm valores idênticos em colunas específicas, frequentemente usado com funções de agregação (SUM, AVG, COUNT, etc.).

| Produto | Quantia |
|---------|---------|
| Maçã | 10 |
| Maçã | 5 |
| Banana | 8 |

**Retorna:**

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã | 15 |
| Banana | 8 |'
);

-- HAVING
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'HAVING',
    'SELECT Produto, SUM(Quantia) FROM quantidades GROUP BY Produto HAVING SUM(Quantia) > 10;',
    'Filtra grupos de linhas, criados pelo `GROUP BY`, com base em uma condição.

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã | 15 |
| Banana | 8 |

**Retorna:**

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã | 15 |'
);

-- ORDER BY
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'ORDER BY',
    'SELECT * FROM quantidades ORDER BY Quantia ASC;',
    'Ordena o conjunto de resultados em ordem crescente (ASC) ou decrescente (DESC) com base em uma ou mais colunas.

| Produto | Quantia |
|---------|---------|
| Maçã | 10 |
| Banana | 5 |
| Cenoura | 25 |

**Retorna:**

| Produto | Quantia |
|---------|---------|
| Banana | 5 |
| Maçã | 10 |
| Cenoura | 25 |'
);

-- JOIN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'JOIN',
    'SELECT Produto, nome FROM quantidades JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;',
    'Combina linhas de duas ou mais tabelas com base em uma coluna relacionada entre elas.

**quantidades**
| Produto | fornecedor_id |
|----------|---------------|
| Maçã | 1 |
| Banana | 2 |

**fornecedores**
| id | nome |
|----|--------------|
| 1 | Fornecedor A |
| 2 | Fornecedor B |

**Retorna:**

| Produto | nome |
|---------|--------------|
| Maçã | Fornecedor A |
| Banana | Fornecedor B |'
);

-- INNER JOIN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'INNER JOIN',
    'SELECT Produto, nome FROM quantidades INNER JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;',
    'Retorna apenas os registros que possuem correspondência em ambas as tabelas (junção interna).

**quantidades**
| Produto | fornecedor_id |
|---------|---------------|
| Maçã | 1 |
| Abacaxi | 3 |

**fornecedores**
| id | nome |
|----|--------------|
| 1 | Fornecedor A |
| 2 | Fornecedor B |

**Retorna:**

| Produto | nome |
|---------|--------------|
| Maçã | Fornecedor A |'
);

-- LEFT JOIN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'LEFT JOIN',
    'SELECT Produto, nome FROM quantidades LEFT JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;',
    'Retorna todos os registros da tabela da esquerda, e os registros correspondentes da tabela da direita.

**quantidades (Tabela da esquerda)**
| Produto | fornecedor_id |
|---------|---------------|
| Maçã | 1 |
| Abacaxi | 3 |

**fornecedores (Tabela da direita)**
| id | nome |
|----|--------------|
| 1 | Fornecedor A |
| 2 | Fornecedor B |

**Retorna:**

| Produto | nome |
|---------|--------------|
| Maçã | Fornecedor A |
| Abacaxi | NULL |'
);

-- RIGHT JOIN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'RIGHT JOIN',
    'SELECT Produto, nome FROM quantidades RIGHT JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;',
    'Retorna todos os registros da tabela da direita, e os registros correspondentes da tabela da esquerda.

**quantidades (Tabela da esquerda)**
| Produto | fornecedor_id |
|---------|---------------|
| Maçã | 1 |
| Abacaxi | 3 |

**fornecedores (Tabela da direita)**
| id | nome |
|----|--------------|
| 1 | Fornecedor A |
| 2 | Fornecedor B |

**Retorna:**

| Produto | nome |
|---------|--------------|
| Maçã | Fornecedor A |
| NULL | Fornecedor B |'
);

-- FULL OUTER JOIN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'FULL OUTER JOIN',
    'SELECT * FROM quantidades FULL OUTER JOIN vendas_loja ON quantidades.Produto = vendas_loja.Produto;',
    'Combina registros de duas tabelas, retornando todos os registros correspondentes e os registros sem correspondência de ambas as tabelas.

**tabela: quantidades**
| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**tabela: vendas_loja**
| Produto | Loja | Vendas |
|---------|--------|--------|
| Maçã | 8 | Loja A |
| Uva | 12 | Loja A |

**Retorna:**

| Produto | Quantia | Loja_quantidades | Produto_vendas | Loja_vendas | Vendas |
|---------|---------|------------------|----------------|-------------|--------|
| Maçã | 10 | Loja A | Maçã | Loja A | 8 |
| Banana | 5 | Loja B | NULL | NULL | NULL |
| NULL | NULL | NULL | Uva | Loja A | 12 |'
);

-- AS
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'AS',
    'SELECT Produto AS Item, Quantia AS Estoque FROM quantidades;',
    'Cria um apelido temporário para uma coluna ou tabela em uma consulta.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| Item | Estoque |
|--------|---------|
| Maçã | 10 |
| Banana | 5 |'
);

-- COUNT
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'COUNT',
    'SELECT COUNT(Produto) FROM quantidades;',
    'Conta o número de linhas que correspondem a uma condição especificada.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| COUNT(Produto) |
|----------------|
| 2 |'
);

-- SUM
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'SUM',
    'SELECT SUM(Quantia) FROM quantidades;',
    'Calcula a soma de todos os valores em uma coluna numérica.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| SUM(Quantia) |
|--------------|
| 15 |'
);

-- AVG
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'AVG',
    'SELECT AVG(Quantia) FROM quantidades;',
    'Calcula a média de todos os valores em uma coluna numérica.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| AVG(Quantia) |
|--------------|
| 7.5 |'
);

-- MIN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'MIN',
    'SELECT MIN(Quantia) FROM quantidades;',
    'Encontra o valor mínimo em uma coluna selecionada.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| MIN(Quantia) |
|--------------|
| 5 |'
);

-- MAX
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'MAX',
    'SELECT MAX(Quantia) FROM quantidades;',
    'Encontra o valor máximo em uma coluna selecionada.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| MAX(Quantia) |
|--------------|
| 10 |'
);

-- DISTINCT
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'DISTINCT',
    'SELECT DISTINCT Produto FROM quantidades;',
    'Remove valores duplicados de uma coluna no resultado da consulta.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |
| Maçã | 8 | Loja B |

**Retorna:**

| Produto |
|---------|
| Maçã |
| Banana |'
);

-- LIKE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'LIKE',
    'SELECT * FROM quantidades WHERE Produto LIKE ''Ma%'';',
    'Usado na cláusula `WHERE` para encontrar padrões em dados.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |
| Manga | 8 | Loja B |

**Retorna:**

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Manga | 8 | Loja B |'
);

-- IN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'IN',
    'SELECT * FROM quantidades WHERE Loja IN (''Loja A'', ''Loja C'');',
    'Usado na cláusula `WHERE` para especificar múltiplos valores possíveis para uma coluna.

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |
| Abacate | 12 | Loja C |

**Retorna:**

| Produto | Quantia | Loja |
|---------|---------|--------|
| Maçã | 10 | Loja A |
| Abacate | 12 | Loja C |'
);

-- BETWEEN
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'BETWEEN',
    'SELECT * FROM vendas WHERE venda BETWEEN 100.00 AND 200.00;',
    'Seleciona valores dentro de um intervalo.

**vendas**
| id | venda | data |
|----|-------|------|
| 1 | 150.00| 2024 |
| 2 | 50.00 | 2024 |
| 3 | 200.00| 2024 |
| 4 | 250.00| 2024 |

**Retorna:**

| id | venda | data |
|----|-------|------|
| 1 | 150.00| 2024 |
| 3 | 200.00| 2024 |'
);

-- CASE
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'CASE',
    'SELECT Produto, CASE WHEN Quantia > 10 THEN ''Em Estoque'' ELSE ''Baixo Estoque'' END AS Status FROM quantidades;',
    'Cria lógicas condicionais para retornar valores diferentes.

**quantidades**
| Produto | Quantia |
|---------|---------|
| Maçã | 12 |
| Banana | 5 |
| Pera | 20 |

**Retorna:**

| Produto | Status |
|---------|----------------|
| Maçã | Em Estoque |
| Banana | Baixo Estoque |
| Pera | Em Estoque |'
);

-- EXISTS
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'EXISTS',
    'SELECT * FROM quantidades WHERE EXISTS (SELECT 1 FROM pedidos WHERE pedidos.produto = quantidades.produto);',
    'Verifica se uma subconsulta retorna algum registro, otimizando a checagem de existência.

**Tabelas**
**pedidos**
| id_pedido | produto |
|-----------|---------|
| 101 | Maçã |
| 102 | Banana |

**quantidades**
| produto | loja |
|---------|------|
| Maçã | Loja A |
| Banana | Loja B |
| Pera | Loja C |

**Retorna:**

| produto | loja |
|---------|------|
| Maçã | Loja A |
| Banana | Loja B |'
);

-- NOT
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'NOT',
    'SELECT * FROM produtos WHERE NOT disponivel;',
    'Nega uma condição, retornando registros que não a satisfazem.

**Tabela de produtos**
| produto | disponivel |
|---------|------------|
| Maçã | true |
| Banana | false |
| Pera | true |

**Retorna:**

| produto | disponivel |
|---------|------------|
| Banana | false |'
);

-- IS NULL / IS NOT NULL
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'IS NULL / IS NOT NULL',
    'SELECT nome FROM contatos WHERE telefone IS NULL;',
    'Testa se o valor de uma coluna é nulo (ausente) ou não é nulo.

**contatos**
| nome | telefone | email |
|-------|----------|-------|
| Ana | 111-111 | null |
| João | 222-222 | joao@ |
| Pedro | null | null |

**Retorna:**

| nome |
|-------|
| Pedro |'
);

-- LIMIT
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'LIMIT',
    'SELECT * FROM vendas ORDER BY valor DESC LIMIT 2;',
    'Limita o número de registros retornados por uma consulta, útil para paginação.

**vendas**
| id | valor |
|----|-------|
| 1 | 150 |
| 2 | 200 |
| 3 | 120 |
| 4 | 250 |

**Retorna:**

| id | valor |
|----|-------|
| 4 | 250 |
| 2 | 200 |'
);

-- OFFSET
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'OFFSET',
    'SELECT * FROM vendas ORDER BY valor DESC LIMIT 2 OFFSET 1;',
    'Pula um número de registros antes de iniciar a contagem do `LIMIT`, útil para paginação.

**vendas**
| id | valor |
|----|-------|
| 1 | 150 |
| 2 | 200 |
| 3 | 120 |
| 4 | 250 |

**Retorna:**

| id | valor |
|----|-------|
| 2 | 200 |
| 1 | 150 |'
);

-- TOP
INSERT INTO comandos (nome_comando, codigo_comando, exemplo_comando) VALUES (
    'TOP',
    'SELECT TOP 2 * FROM vendas ORDER BY valor DESC;',
    'Retorna um número específico de registros de um conjunto (Sintaxe do SQL Server).

**vendas**
| id | valor |
|----|-------|
| 1 | 150 |
| 2 | 200 |
| 3 | 120 |
| 4 | 250 |

**Retorna:**

| id | valor |
|----|-------|
| 4 | 250 |
| 2 | 200 |'
);
