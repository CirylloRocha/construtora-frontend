// ===== OPERAÇÕES BANCO DE DADOS =====

const db = {
    // ===== TRANSAÇÕES =====
    async getAllTransacoes() {
        return await supabase
            .from('transacoes')
            .select(`
                *,
                categorias(*),
                formas_pagamento(*),
                instituicoes(*),
                obras(*),
                usuarios(*)
            `)
            .order('data_transacao', { ascending: false });
    },

    async getTransacoesPorPeriodo(dataInicio, dataFim) {
        return await supabase
            .from('transacoes')
            .select(`
                *,
                categorias(*),
                formas_pagamento(*),
                instituicoes(*),
                obras(*),
                usuarios(*)
            `)
            .gte('data_transacao', dataInicio)
            .lte('data_transacao', dataFim)
            .eq('status', 'confirmada')
            .order('data_transacao', { ascending: false });
    },

    async insertTransacao(data) {
        return await supabase
            .from('transacoes')
            .insert([data])
            .select();
    },

    async updateTransacao(id, data) {
        return await supabase
            .from('transacoes')
            .update(data)
            .eq('id', id);
    },

    async deleteTransacao(id) {
        return await supabase
            .from('transacoes')
            .delete()
            .eq('id', id);
    },

    // ===== PARCELAS =====
    async insertParcela(transacaoId, data) {
        return await supabase
            .from('parcelas')
            .insert([{
                transacao_id: transacaoId,
                ...data
            }]);
    },

    async getParcelasVencidas() {
        return await supabase
            .from('parcelas')
            .select(`
                *,
                transacoes(*)
            `)
            .eq('status', 'pendente')
            .lt('data_vencimento', new Date().toISOString().split('T')[0]);
    },

    // ===== OBRAS =====
    async getObras() {
        return await supabase
            .from('obras')
            .select('*')
            .eq('ativo', true)
            .order('data_criacao', { ascending: false });
    },

    // ===== CATEGORIAS =====
    async getCategorias() {
        return await supabase
            .from('categorias')
            .select('*')
            .eq('ativo', true)
            .order('nome');
    },

    // ===== FORMAS DE PAGAMENTO =====
    async getFormasPagamento() {
        return await supabase
            .from('formas_pagamento')
            .select('*')
            .eq('ativo', true)
            .order('nome');
    },

    // ===== INSTITUIÇÕES =====
    async getInstituicoes() {
        return await supabase
            .from('instituicoes')
            .select('*')
            .order('nome');
    },

    // ===== USUÁRIOS =====
    async getUsuarios() {
        return await supabase
            .from('usuarios')
            .select('*')
            .eq('ativo', true)
            .order('nome');
    }
};