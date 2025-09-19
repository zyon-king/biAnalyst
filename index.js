// CommonJS is a module system in JavaScript 
// that uses `require()` to import modules 
// and `module.exports` to export them.

// Appwrite Function's code 
// uses the CommonJS format. Appwrite's 
// function runner is likely using 
// require() under the hood, so the code
// needs to be compatible with it.

// ===================================
// index.js (Correção)
// ===================================
// ===================================
// index.js (Appwrite Function Corrigida)
// ===================================

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async ({ req, res, log, error }) => {
    // AQUI ESTÁ A CORREÇÃO: Analise o corpo da requisição
    const { acao, parametros } = JSON.parse(req.body);

    try {
        let resultado;
        let dbError = null;

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
                return res.json({ success: false, message: 'Ação não reconhecida.' }, 400);
        }

        if (dbError) throw dbError;

        return res.json({ success: true, data: resultado });

    } catch (e) {
        log(e);
        return res.json({ success: false, message: e.message }, 500);
    }
};
