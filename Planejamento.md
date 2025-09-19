A ideia não é permitir digitação de SQL bruto, mas sim montar interfaces que representam os comandos SQL de forma segura.

Extração de Dados:

As primeiras linhas (const produto = req.body.produto; etc.) 
recebem os dados que o usuário enviou através da página web.

A função retira apenas as informações que precisa do corpo da 
requisição (req.body) de forma explícita (produto, quantidade, userId), 
ignorando qualquer outra informação que o usuário possa tentar enviar.

Validação de Dados:

Este é um passo crucial. A linha 
if (!produto || isNaN(quantidade) || quantidade < 0) 
é o "guardião" em ação.

Ele verifica se o produto existe, se a quantidade é realmente um 
número (!isNaN) e se não é um número negativo.

Se qualquer uma dessas condições falhar, a função para 
imediatamente e lança um erro, impedindo que dados incorretos 
ou maliciosos cheguem ao seu banco de dados.

Inserção Segura:

A última parte (await supabase.from('vendas').insert(...)) é a ação final.

Como a função já validou os dados e o comando de inserção é fixo, 
há a certeza de que está sendo inserindo apenas dados válidos e 
nos campos corretos do seu banco de dados.

🛡️ O que o HTML faz?
Ele representa comandos SQL controlados via formulários seguros
Cada formulário usa campos para preencher partes da query, sem permitir código SQL direto
Os dados podem ser enviados para função Appwrite ou backend customizado

🔒 Segurança no backend
No servidor (função Appwrite):
Verifique qual comando está sendo enviado (req.body.comando)
Monte a SQL com segurança e parâmetros (nunca concatene strings diretamente)
Execute somente os comandos permitidos e com validação
Registre quem enviou (user ID) e quando
