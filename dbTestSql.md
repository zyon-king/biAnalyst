---

Nome do comando:
## DELETE FROM

Código do comando:
`DELETE FROM quantidades`  
`WHERE Produto = 'Maçã' AND Loja = 'Loja A';`

Exemplo do comando:
Remove registros de uma tabela que atendem a uma condição específica.

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã       | 10        | Loja A |
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |

**Retorna:**

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |

---

Nome do comando:
## UPDATE

Código do comando:
`UPDATE quantidades`
`SET Quantia = 15`
`WHERE Produto = 'Maçã' AND Loja = 'Loja A';`

Exemplo do comando:
Atualiza registros existentes em uma tabela, alterando valores em colunas específicas.

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã       | 10        | Loja A |
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |

**Retorna:**

|   |    A     |    B      |   C    |
|---|----------|-----------|--------|
|1| **Produto**|**Quantia**|**Loja**|
|3| Maçã       | 15        | Loja A |
|4| Banana     | 5         | Loja B |
|5| Maçã       | 8         | Loja B |

---

Nome do comando:
## INSERT INTO

Código do comando:
`INSERT INTO quantidades (Produto, Quantia, Loja) VALUES ('Cenoura', 25, 'Loja C');`

Exemplo do comando:
Insere novos registros (linhas) em uma tabela.

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |
| Cenoura | 25 | Loja C |

---

Nome do comando:
## DROP TABLE

Código do comando:
`DROP TABLE quantidades;`

Exemplo do comando:
Exclui uma tabela inteira do banco de dados.

| Produto | Quantia |
|----------|---------|
| Maçã | 10 |
| Banana | 5 |

**Retorna:**

(A tabela 'quantidades' não existe mais)

---

Nome do comando:
## ALTER TABLE

Código do comando:
`ALTER TABLE quantidades ADD COLUMN Comentarios VARCHAR(255);`

Exemplo do comando:
Modifica a estrutura de uma tabela existente.

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| Produto | Quantia | Loja | Comentarios |
|----------|---------|--------|-------------|
| Maçã | 10 | Loja A | |
| Banana | 5 | Loja B | |

---

Nome do comando:
## ADD COLUMN

Código do comando:
`ALTER TABLE quantidades ADD COLUMN Cor VARCHAR(50);`

Exemplo do comando:
Adiciona uma nova coluna a uma tabela existente.

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

**Retorna:**

| Produto | Quantia | Loja | Cor |
|----------|---------|--------|-----|
| Maçã | 10 | Loja A | |
| Banana | 5 | Loja B | |

---

Nome do comando:
## DROP COLUMN

Código do comando:
`ALTER TABLE quantidades DROP COLUMN Comentarios;`

Exemplo do comando:
Remove uma coluna de uma tabela existente.

| Produto | Quantia | Loja | Comentarios |
|----------|---------|--------|-------------|
| Maçã | 10 | Loja A | |
| Banana | 5 | Loja B | |

**Retorna:**

| Produto | Quantia | Loja |
|----------|---------|--------|
| Maçã | 10 | Loja A |
| Banana | 5 | Loja B |

---

Nome do comando:
## CREATE TABLE

Código do comando:
`CREATE TABLE fornecedores (id INT PRIMARY KEY, nome VARCHAR(100), contato VARCHAR(100));`

Exemplo do comando:
Cria uma nova tabela no banco de dados.

(A tabela 'fornecedores' não existe)

**Retorna:**

| id | nome | contato |
|----|------|---------|
| | | |

---

Nome do comando:
## PRIMARY KEY

Código do comando:
`ALTER TABLE produtos ADD PRIMARY KEY (id);`

Exemplo do comando:
Define uma coluna como chave primária, garantindo valores únicos.

| id | nome |
|----|------|
| 1 | Lápis |
| 1 | Caneta|

**Retorna:**

(A inserção do 'id' 1 para a caneta falharia)

---

Nome do comando:
## FOREIGN KEY

Código do comando:
`ALTER TABLE quantidades ADD FOREIGN KEY (id_produto) REFERENCES fornecedores(id);`

Exemplo do comando:
Cria um link entre duas tabelas.

**quantidades**
| id_produto | quantidade |
|------------|------------|
| 1 | 10 |

**fornecedores**
| id | nome |
|----|------|
| 1 | Fornecedor A |

**Retorna:**

(Uma linha com `id_produto = 2` na tabela 'quantidades' falharia, pois não existe um fornecedor com `id = 2`)

---

---

Nome do comando:
## UNIQUE

Código do comando:
`ALTER TABLE quantidades`
`ADD UNIQUE (Produto);`

Exemplo do comando:
Garante que todos os valores em uma coluna sejam únicos.

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

(A inserção do segundo registro de 'Uva' falharia, pois a restrição de 'UNIQUE' proíbe valores duplicados)

---

Nome do comando:
## CHECK

Código do comando:
`ALTER TABLE quantidades`
`ADD CHECK (Quantia > 0);`

Exemplo do comando:
Garante que os valores em uma coluna satisfaçam uma condição específica.

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

(A inserção do registro 'Morango' com valor -1 falharia, pois a restrição 'CHECK' proíbe valores menores que zero)

---

Nome do comando:
## DEFAULT

Código do comando:
`ALTER TABLE quantidades`
`ADD COLUMN Status VARCHAR(20) DEFAULT 'Disponível';`

Exemplo do comando:
Define um valor padrão para uma coluna, usado quando nenhum valor é especificado.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

**Retorna:**

| Produto | Quantia | Status |
|---|---|---|
| Uva | 10 | Disponível |
| Cenoura | 15 | Disponível |

(A nova coluna 'Status' será preenchida automaticamente com o valor 'Disponível' para novos registros, a menos que outro valor seja especificado)

---

Nome do comando:
## INDEX

Código do comando:
`CREATE INDEX idx_produto`
`ON quantidades (Produto);`

Exemplo do comando:
Melhora a velocidade das operações de busca de dados em uma coluna, como se fosse um índice de livro.

**Retorna:**

A busca por produtos na tabela 'quantidades' será muito mais rápida, pois o banco de dados não precisará examinar todas as linhas.

---

Nome do comando:
## VIEW

Código do comando:
`CREATE VIEW produtos_loja_a`
`AS SELECT Produto, Quantia`
`FROM quantidades`
`WHERE Loja = 'Loja A';`

Exemplo do comando:
Uma tabela virtual baseada no resultado de uma instrução `SELECT`.

**Retorna:**

Uma nova "tabela" chamada `produtos_loja_a` é criada, contendo apenas os dados da Loja A. Você pode usar um `SELECT *` nessa VIEW como se fosse uma tabela real.

---

Nome do comando:
## STORED PROCEDURE

Código do comando:
`CREATE PROCEDURE sp_get_produtos_loja(loja_nome VARCHAR(50))`
`BEGIN`
`SELECT Produto, Quantia`
`FROM quantidades`
`WHERE Loja = loja_nome;`
`END;`

Exemplo do comando:
Um conjunto de instruções SQL pré-compiladas que podem ser salvas e executadas várias vezes, como uma função.

**Retorna:**

O procedimento armazenado `sp_get_produtos_loja` é criado no banco de dados. Você pode executá-lo usando `CALL sp_get_produtos_loja('Loja A');`

---

Nome do comando:
## TRIGGER

Código do comando:
`CREATE TRIGGER trg_log_estoque`
`AFTER INSERT ON quantidades`
`FOR EACH ROW`
`INSERT INTO logs (acao, data) VALUES ('Novo produto inserido', NOW());`

Exemplo do comando:
Um comando SQL que é executado automaticamente em resposta a um evento (como `INSERT`, `UPDATE` ou `DELETE`) em uma tabela específica.

**Retorna:**

Um gatilho chamado `trg_log_estoque` é ativado. Cada vez que um novo produto é inserido, um registro é automaticamente adicionado na tabela de `logs`.

---

Nome do comando:
## TRANSACTION

Código do comando:
`BEGIN TRANSACTION;`

Exemplo do comando:
Uma sequência de uma ou mais operações de banco de dados tratadas como uma única unidade de trabalho. Inclui `COMMIT` e `ROLLBACK`.

**Retorna:**

A transação é iniciada. Todas as operações de banco de dados a partir de agora serão temporárias até que um `COMMIT` ou `ROLLBACK` seja executado.

---

Nome do comando:
## COMMIT

Código do comando:
`BEGIN TRANSACTION;`
`UPDATE quantidades SET Quantia = 20 WHERE Produto = 'Uva';`
`COMMIT;`

Exemplo do comando:
Salva todas as alterações feitas em uma transação, tornando-as permanentes no banco de dados.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 20 |
| Cenoura | 15 |

(A atualização da 'Uva' é salva permanentemente)

---

Nome do comando:
## ROLLBACK

Código do comando:
`BEGIN TRANSACTION;`
`UPDATE quantidades SET Quantia = 20 WHERE Produto = 'Uva';`
`ROLLBACK;`

Exemplo do comando:
Desfaz todas as alterações feitas em uma transação, retornando o banco de dados ao seu estado original antes do `BEGIN TRANSACTION`.

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

**Retorna:**

| Produto | Quantia |
|---|---|
| Uva | 10 |
| Cenoura | 15 |

(A atualização da 'Uva' é desfeita, e o valor original é restaurado)

---

Nome do comando:
## SELECT

Código do comando:
`SELECT Produto, Quantia FROM quantidades;`

Exemplo do comando:
Seleciona colunas específicas para exibir no resultado da consulta.

| id | Produto | Quantia | Loja |
|----|---------|---------|------|
| 1  | Maçã    | 10      | Loja A |
| 2  | Banana  | 5       | Loja B |


**Retorna:**

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |

---

Nome do comando:
## FROM

Código do comando:
`SELECT * FROM quantidades;`

Exemplo do comando:
Especifica de qual tabela os dados serão buscados na consulta.

(Tabela 'quantidades')
| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |


**Retorna:**

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |

---

Nome do comando:
## WHERE

Código do comando:
`SELECT * FROM quantidades WHERE Loja = 'Loja A';`

Exemplo do comando:
Filtra os registros (linhas) para que apenas aqueles que satisfazem uma condição específica sejam retornados.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Cenoura | 25      | Loja A |


**Retorna:**

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Cenoura | 25      | Loja A |

---

Nome do comando:
## GROUP BY

Código do comando:
`SELECT Produto, SUM(Quantia) FROM quantidades GROUP BY Produto;`

Exemplo do comando:
Agrupa linhas que têm valores idênticos em colunas específicas, frequentemente usado com funções de agregação (SUM, AVG, COUNT, etc.).

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Maçã    | 5       |
| Banana  | 8       |


**Retorna:**

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã    | 15           |
| Banana  | 8            |

---

Nome do comando:
## HAVING

Código do comando:
`SELECT Produto, SUM(Quantia) FROM quantidades GROUP BY Produto HAVING SUM(Quantia) > 10;`

Exemplo do comando:
Filtra grupos de linhas, criados pelo `GROUP BY`, com base em uma condição.

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã    | 15           |
| Banana  | 8            |


**Retorna:**

| Produto | SUM(Quantia) |
|---------|--------------|
| Maçã    | 15           |

---

Nome do comando:
## ORDER BY

Código do comando:
`SELECT * FROM quantidades ORDER BY Quantia ASC;`

Exemplo do comando:
Ordena o conjunto de resultados em ordem crescente (ASC) ou decrescente (DESC) com base em uma ou mais colunas.

| Produto | Quantia |
|---------|---------|
| Maçã    | 10      |
| Banana  | 5       |
| Cenoura | 25      |


**Retorna:**

| Produto | Quantia |
|---------|---------|
| Banana  | 5       |
| Maçã    | 10      |
| Cenoura | 25      |

---

Nome do comando:
## JOIN

Código do comando:
`SELECT Produto, nome FROM quantidades JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`

Exemplo do comando:
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


**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |
| Banana  | Fornecedor B |

---

Nome do comando:
## INNER JOIN

Código do comando:
`SELECT Produto, nome FROM quantidades INNER JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`

Exemplo do comando:
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


**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |

---

Nome do comando:
## LEFT JOIN

Código do comando:
`SELECT Produto, nome FROM quantidades LEFT JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`

Exemplo do comando:
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


**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |
| Abacaxi | NULL         |

---

Nome do comando:
## RIGHT JOIN

Código do comando:
`SELECT Produto, nome FROM quantidades RIGHT JOIN fornecedores ON quantidades.fornecedor_id = fornecedores.id;`

Exemplo do comando:
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

**Retorna:**

| Produto | nome         |
|---------|--------------|
| Maçã    | Fornecedor A |
| NULL    | Fornecedor B |

---

Nome do comando:
## FULL OUTER JOIN

Código do comando:
`SELECT * FROM quantidades FULL OUTER JOIN vendas_loja ON quantidades.Produto = vendas_loja.Produto;`

Exemplo do comando:
Combina registros de duas tabelas, retornando todos os registros correspondentes e os registros sem correspondência de ambas as tabelas.

**tabela: quantidades**
| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**tabela: vendas_loja**
| Produto | Loja   | Vendas |
|---------|--------|--------|
| Maçã    | 8       | Loja A |
| Uva     | 12      | Loja A |

**Retorna:**

| Produto | Quantia | Loja_quantidades | Produto_vendas | Loja_vendas | Vendas |
|---------|---------|------------------|----------------|-------------|--------|
| Maçã    | 10      | Loja A           | Maçã           | Loja A      | 8      |
| Banana  | 5       | Loja B           | NULL           | NULL        | NULL   |
| NULL    | NULL    | NULL             | Uva            | Loja A      | 12     |

---

Nome do comando:
## AS

Código do comando:
`SELECT Produto AS Item, Quantia AS Estoque FROM quantidades;`

Exemplo do comando:
Cria um apelido temporário para uma coluna ou tabela em uma consulta.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**Retorna:**

| Item   | Estoque |
|--------|---------|
| Maçã   | 10      |
| Banana | 5       |

---

Nome do comando:
## COUNT

Código do comando:
`SELECT COUNT(Produto) FROM quantidades;`

Exemplo do comando:
Conta o número de linhas que correspondem a uma condição especificada.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**Retorna:**

| COUNT(Produto) |
|----------------|
| 2              |

---

Nome do comando:
## SUM

Código do comando:
`SELECT SUM(Quantia) FROM quantidades;`

Exemplo do comando:
Calcula a soma de todos os valores em uma coluna numérica.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**Retorna:**

| SUM(Quantia) |
|--------------|
| 15           |

---

Nome do comando:
## AVG

Código do comando:
`SELECT AVG(Quantia) FROM quantidades;`

Exemplo do comando:
Calcula a média de todos os valores em uma coluna numérica.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**Retorna:**

| AVG(Quantia) |
|--------------|
| 7.5          |

---

Nome do comando:
## MIN

Código do comando:
`SELECT MIN(Quantia) FROM quantidades;`

Exemplo do comando:
Encontra o valor mínimo em uma coluna selecionada.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**Retorna:**

| MIN(Quantia) |
|--------------|
| 5            |

---

Nome do comando:
## MAX

Código do comando:
`SELECT MAX(Quantia) FROM quantidades;`

Exemplo do comando:
Encontra o valor máximo em uma coluna selecionada.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |

**Retorna:**

| MAX(Quantia) |
|--------------|
| 10           |

---

Nome do comando:
## DISTINCT

Código do comando:
`SELECT DISTINCT Produto FROM quantidades;`

Exemplo do comando:
Remove valores duplicados de uma coluna no resultado da consulta.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Maçã    | 8       | Loja B |

**Retorna:**

| Produto |
|---------|
| Maçã    |
| Banana  |

---

Nome do comando:
## LIKE

Código do comando:
`SELECT * FROM quantidades WHERE Produto LIKE 'Ma%';`

Exemplo do comando:
Usado na cláusula `WHERE` para encontrar padrões em dados.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Manga   | 8       | Loja B |

**Retorna:**

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Manga   | 8       | Loja B |

---

Nome do comando:
## IN

Código do comando:
`SELECT * FROM quantidades WHERE Loja IN ('Loja A', 'Loja C');`

Exemplo do comando:
Usado na cláusula `WHERE` para especificar múltiplos valores possíveis para uma coluna.

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Banana  | 5       | Loja B |
| Abacate | 12      | Loja C |

**Retorna:**

| Produto | Quantia | Loja   |
|---------|---------|--------|
| Maçã    | 10      | Loja A |
| Abacate | 12      | Loja C |

---

Nome do comando:
## BETWEEN

Código do comando:
`SELECT * FROM vendas WHERE venda BETWEEN 100.00 AND 200.00;`

Exemplo do comando:
Seleciona valores dentro de um intervalo.

**vendas**
| id | venda | data |
|----|-------|------|
| 1  | 150.00| 2024 |
| 2  | 50.00 | 2024 |
| 3  | 200.00| 2024 |
| 4  | 250.00| 2024 |

**Retorna:**

| id | venda | data |
|----|-------|------|
| 1  | 150.00| 2024 |
| 3  | 200.00| 2024 |

---

Nome do comando:
## CASE

Código do comando:
`SELECT Produto, CASE WHEN Quantia > 10 THEN 'Em Estoque' ELSE 'Baixo Estoque' END AS Status FROM quantidades;`

Exemplo do comando:
Cria lógicas condicionais para retornar valores diferentes.

**quantidades**
| Produto | Quantia |
|---------|---------|
| Maçã    | 12      |
| Banana  | 5       |
| Pera    | 20      |

**Retorna:**

| Produto | Status |
|---------|----------------|
| Maçã    | Em Estoque     |
| Banana  | Baixo Estoque  |
| Pera    | Em Estoque     |

---

Nome do comando:
## EXISTS

Código do comando:
`SELECT * FROM quantidades WHERE EXISTS (SELECT 1 FROM pedidos WHERE pedidos.produto = quantidades.produto);`

Exemplo do comando:
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

**Retorna:**

| produto | loja |
|---------|------|
| Maçã    | Loja A |
| Banana  | Loja B |

---

Nome do comando:
## NOT

Código do comando:
`SELECT * FROM produtos WHERE NOT disponivel;`

Exemplo do comando:
Nega uma condição, retornando registros que não a satisfazem.

**Tabela de produtos**
| produto | disponivel |
|---------|------------|
| Maçã    | true       |
| Banana  | false      |
| Pera    | true       |

**Retorna:**

| produto | disponivel |
|---------|------------|
| Banana  | false      |

---

Nome do comando:
## IS NULL / IS NOT NULL

Código do comando:
`SELECT nome FROM contatos WHERE telefone IS NULL;`

Exemplo do comando:
Testa se o valor de uma coluna é nulo (ausente) ou não é nulo.

**contatos**
| nome  | telefone | email |
|-------|----------|-------|
| Ana   | 111-111  | null  |
| João  | 222-222  | joao@ |
| Pedro | null     | null  |

**Retorna:**

| nome  |
|-------|
| Pedro |

---

Nome do comando:
## LIMIT

Código do comando:
`SELECT * FROM vendas ORDER BY valor DESC LIMIT 2;`

Exemplo do comando:
Limita o número de registros retornados por uma consulta, útil para paginação.

**vendas**
| id | valor |
|----|-------|
| 1  | 150   |
| 2  | 200   |
| 3  | 120   |
| 4  | 250   |

**Retorna:**

| id | valor |
|----|-------|
| 4  | 250   |
| 2  | 200   |

---

Nome do comando:
## OFFSET

Código do comando:
`SELECT * FROM vendas ORDER BY valor DESC LIMIT 2 OFFSET 1;`

Exemplo do comando:
Pula um número de registros antes de iniciar a contagem do `LIMIT`, útil para paginação.

**vendas**
| id | valor |
|----|-------|
| 1  | 150   |
| 2  | 200   |
| 3  | 120   |
| 4  | 250   |

**Retorna:**

| id | valor |
|----|-------|
| 2  | 200   |
| 1  | 150   |

---

Nome do comando:
## TOP

Código do comando:
`SELECT TOP 2 * FROM vendas ORDER BY valor DESC;`

Exemplo do comando:
Retorna um número específico de registros de um conjunto (Sintaxe do SQL Server).

**vendas**
| id | valor |
|----|-------|
| 1  | 150   |
| 2  | 200   |
| 3  | 120   |
| 4  | 250   |

**Retorna:**

| id | valor |
|----|-------|
| 4  | 250   |
| 2  | 200   |
