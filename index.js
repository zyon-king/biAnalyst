// CommonJS is a module system in JavaScript 
// that uses `require()` to import modules 
// and `module.exports` to export them.

// Appwrite Function's code 
// uses the CommonJS format. Appwrite's 
// function runner is likely using 
// require() under the hood, so the code
// needs to be compatible with it.

// ===================================
// index.js (Appwrite Function - CommonJS)
// ===================================

/* Importa a biblioteca do Supabase
const { createClient } = require('@supabase/supabase-js');

// Conecta ao Supabase usando variáveis de ambiente seguras
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Exporta a função principal que o Appwrite vai executar
module.exports = async ({ req, res, log, error }) => {
    // Analisa o corpo da requisição que é enviado como uma string JSON
    const { acao, parametros } = JSON.parse(req.body);

    try {
        let resultado;
        let dbError = null;

        // Usa um "switch" para decidir qual ação executar com base no que foi enviado
        switch (acao) {
            case 'buscar-tudo':
                const { tabela } = parametros;
                const { data, error: selectError } = await supabase
                    .from(tabela)
                    .select('*');
                
                dbError = selectError;
                resultado = data;
                break;

            case 'buscar-por-loja':
                const { loja } = parametros;
                const { data: data2, error: selectError2 } = await supabase
                    .from('quantidades')
                    .select('*')
                    .eq('Loja', loja);
                
                dbError = selectError2;
                resultado = data2;
                break;

            case 'adicionar-quantidade':
                const { Produto, Quantia, Loja } = parametros;
                const { data: insertData, error: insertError } = await supabase
                    .from('quantidades')
                    .insert({ Produto, Quantia, Loja });

                dbError = insertError;
                resultado = insertData;
                break;
            
            case 'adicionar-venda':
                const { Produto: prodVenda, Valor, Loja: lojaVenda } = parametros;
                const { data: insertVendaData, error: insertVendaError } = await supabase
                    .from('vendas')
                    .insert({ Produto: prodVenda, Valor, Loja: lojaVenda });
                
                dbError = insertVendaError;
                resultado = insertVendaData;
                break;
            
            default:
                // Retorna um erro se a ação não for reconhecida
                return res.json({ success: false, message: 'Ação não reconhecida.' }, 400);
        }

        // Se houver um erro no banco de dados, lança o erro para o catch
        if (dbError) throw dbError;

        // Retorna o resultado com sucesso
        return res.json({ success: true, data: resultado });

    } catch (e) {
        // Loga o erro para depuração
        log(e);
        // Retorna uma resposta de erro para a página web
        return res.json({ success: false, message: e.message }, 500);
    }
};
*/

const { Client, Databases, Query } = require('node-appwrite');

module.exports = async ({ req, res, log }) => {
    // Configuração do ambiente Appwrite
    const client = new Client()
        .setEndpoint(process.env.APPWRITE_ENDPOINT)
        .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
        .setKey(process.env.APPWRITE_API_KEY);
    
    const databases = new Databases(client);
    const DATABASE_ID = process.env.DATABASE_ID;
    const COLLECTION_ID = process.env.COLLECTION_ID;
    
    try {
        log('Buscando linha aleatória...');
        
        // Busca todos os documentos primeiro para saber quantos existem
        const { documents: allDocs } = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(100) // Ajuste conforme necessário
        ]);
        
        if (allDocs.length === 0) {
            throw new Error('Nenhum documento encontrado no banco de dados');
        }
        
        // Seleciona um documento aleatório
        const randomIndex = Math.floor(Math.random() * allDocs.length);
        const randomDoc = allDocs[randomIndex];
        
        log('Documento selecionado:', randomDoc.$id);
        
        const responseData = {
            id: randomDoc.$id,
            exemplo: randomDoc.exemplo,
            codigo: randomDoc.codigo
        };
        
        return res.json({ 
            success: true, 
            data: responseData 
        });
        
    } catch (error) {
        log('Erro na função:', error);
        return res.json({ 
            success: false, 
            message: `Erro ao buscar dados: ${error.message}` 
        }, 500);
    }
};
