// ===================================
// index.js (APENAS PARA APRENDIZADO - CommonJS)
// ===================================

// Use require() para importar a biblioteca do Supabase
const { createClient } = require('@supabase/supabase-js');

// Conexão com o Supabase (usando variáveis de ambiente)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Use module.exports para exportar a função principal
module.exports = async ({ req, res, log, error }) => {
    // A Appwrite Function fornece o body já parseado
    const { acao, parametros } = req.body;

    try {
        let resultado;

        switch (acao) {
            case 'buscar-tudo':
                const { tabela } = parametros;
                const { data, error: selectError } = await supabase
                    .from(tabela)
                    .select('*');
                
                if (selectError) throw selectError;
                resultado = data;
                break;

            case 'buscar-por-loja':
                const { loja } = parametros;
                const { data: data2, error: selectError2 } = await supabase
                    .from('quantidades')
                    .select('*')
                    .eq('Loja', loja);
                
                if (selectError2) throw selectError2;
                resultado = data2;
                break;

            default:
                return res.json({ success: false, message: 'Ação não reconhecida.' }, 400);
        }

        return res.json({ success: true, data: resultado });

    } catch (e) {
        log(e);
        return res.json({ success: false, message: e.message }, 500);
    }
};
