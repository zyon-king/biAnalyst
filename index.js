// Para fins puramente didáticos e de aprendizado, 
// e entendendo que você jamais usaria este 
// código em um ambiente de produção por ser 
// extremamente inseguro, aqui está a abordagem 
// para executar comandos SQL diretos via uma 
// Appwrite Function.

// ⚠️ AVISO DE SEGURANÇA EXTREMO
// Esta função executa qualquer comando SQL 
// que receber. Um usuário mal-intencionado 
// pode usar isso para deletar, alterar ou 
// roubar todos os seus dados. Use este código 
// apenas para testar em um ambiente controlado 
// e isole-o de qualquer rede pública.

// ===================================
// index.js (APENAS PARA APRENDIZADO)
// ===================================

const { Client } = require('pg');

module.exports = async ({ req, res, log, error }) => {
    // 1. Recebe a requisição e a string SQL
    const { comandoSql, token } = JSON.parse(req.body);
    const tokenSecreto = process.env.TOKEN_SECRETO;

    if (!comandoSql || token !== tokenSecreto) {
        return res.json({ success: false, message: 'Comando SQL ou token inválido.' }, 401);
    }

    // 2. Cria o cliente de banco de dados
    // Use as variáveis de ambiente do seu projeto Supabase
    const client = new Client({
        user: process.env.SUPABASE_DB_USER,
        host: process.env.SUPABASE_DB_HOST,
        database: process.env.SUPABASE_DB_NAME,
        password: process.env.SUPABASE_DB_PASSWORD,
        port: process.env.SUPABASE_DB_PORT
    });

    try {
        // 3. Conecta e executa o comando SQL
        await client.connect();
        const resultado = await client.query(comandoSql);

        // 4. Retorna o resultado
        return res.json({
            success: true,
            data: resultado.rows,
            message: 'Comando SQL executado com sucesso.'
        });

    } catch (e) {
        // 5. Trata erros
        log(e);
        return res.json({
            success: false,
            message: `Erro ao executar o comando: ${e.message}`
        }, 500);
    } finally {
        // 6. Fecha a conexão
        await client.end();
    }
};
