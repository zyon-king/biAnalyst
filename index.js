// ===================================
// index.js (APENAS PARA APRENDIZADO)
// ===================================

import { createClient } from '@supabase/supabase-js';

// Conexão com o Supabase (usando variáveis de ambiente)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async ({ req, res, log, error }) => {
    // 1. Recebe a requisição com a ação e os parâmetros
    const { acao, parametros } = JSON.parse(req.body);

    // 2. Executa a ação segura com base na requisição
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

            // ... Você pode adicionar mais casos aqui para outras ações ...

            default:
                return res.json({ success: false, message: 'Ação não reconhecida.' }, 400);
        }

        return res.json({ success: true, data: resultado });

    } catch (e) {
        log(e);
        return res.json({ success: false, message: e.message }, 500);
    }
};
