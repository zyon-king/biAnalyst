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
