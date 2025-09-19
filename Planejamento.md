# 👷 Segurança no backend

A ideia não é permitir digitação de SQL sem verificação de segurança, mas sim montar interfaces que apenas representam os comandos SQL de forma segura, mas os comandos serão gerados realmente no servidor e não pelo usuário.

## Exemplo:

## ⛏️ Extração de Dados

* As primeiras linhas (`const produto = req.body.produto;` etc.) recebem os dados que o usuário enviou através da página web.
* A função retira apenas as informações que precisa do corpo da requisição (`req.body`) de forma explícita (`produto`, `quantidade`, `userId`), ignorando qualquer outra informação que o usuário possa tentar enviar.

## 🛡️ Validação de Dados

* Este é um passo crucial. A linha `if (!produto || isNaN(quantidade) || quantidade < 0)` é o "guardião" em ação.
* Ele verifica se:
 + O produto existe
 + A quantidade é realmente um número (`!isNaN`)
 + A quantidade não é um número negativo
* Se qualquer uma dessas condições falhar, a função para imediatamente e lança um erro, impedindo que dados incorretos ou maliciosos cheguem ao seu banco de dados.

## 🔒 Inserção Segura

* A última parte (`await supabase.from('vendas').insert(...)`) é a ação final.
* Como a função já validou os dados e o comando de inserção é fixo, há a certeza de que está sendo inserindo apenas dados válidos e nos campos corretos do seu banco de dados.

---

### 🟨 Comandos com verificação de segurança e executados no servidor:
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
  
### 🟥 Comandos de manipulação estrutural (DDL) — NUNCA via usuário:
* DROP TABLE
* ALTER TABLE
* CREATE TABLE
* ADD COLUMN
* DROP COLUMN

Esses devem ser totalmente bloqueados em qualquer função pública.

# ✅ Estrutura proposta

## Input tipo terminal

* Aparência de terminal SQL
* Ocupa 100% da largura e 30% da altura visível
* Usuário digita comandos SQL diretamente (ex: `SELECT * FROM produtos`)

## Área de saída (resposta)

* Exibe a tabela resultante se for uma consulta (`SELECT`)
* Exibe mensagens de status se for comando de escrita (`INSERT`, `UPDATE`, etc.)
* Atualiza dinamicamente conforme o comando enviado e a resposta do Supabase

# 🧠 Benefícios

* 💡 **UX moderna**: Parece um mini-console SQL direto na web.
* 📦 **Compacto e versátil**: Um único input pode lidar com toda a aplicação.
* 🔐 **Segurança centralizada**: A função Appwrite valida tudo antes de executar.
* 🔄 **Resposta dinâmica**: A mesma área mostra resultados ou confirmações.
* ⚙️ **Escalável**: Pode incluir histórico, autocomplete, múltiplas abas etc.

# ⚙️ Comportamento esperado

## Usuário envia comando de escrita

Exemplo: `INSERT INTO produtos (produto, qtd, loja) VALUES ('Manga', 12, 'Loja A');`

## No backend (Função Appwrite)

1. **Valida se o comando é seguro**: Verifica se o comando não é perigoso (ex: não é um `DROP TABLE`, etc.)
2. **Executa o comando no Supabase**: Roda o comando validado no banco de dados
3. **Se for bem-sucedido**:
   * **Retorna uma mensagem de sucesso**
   * **Executa automaticamente um**: `SELECT * FROM produtos;`
   * **Retorna os dados atualizados**

## No frontend

* **Exibe a mensagem de sucesso**: `✅ Produto inserido com sucesso.`
* **Exibe os dados atualizados**:
  
| Produto | Qtd | Loja |
|---------|-----|------|
| Uva     | 10  | Loja A |
| Goiaba  | 5   | Loja B |
| Laranja | 8   | Loja B |
| Manga   | 12  | Loja A |

# ✅ Vantagens dessa abordagem

* **Efeito imediato**: O usuário vê o resultado de cada comando instantaneamente.
* **Segurança centralizada**: A função Appwrite mantém a integridade e segurança dos comandos.
* **Controle total**: O desenvolvedor decide quais comandos podem ou não ser executados.
* **Extensibilidade**: É possível adicionar logs, histórico de comandos, undo, etc.
