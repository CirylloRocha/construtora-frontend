// ===== CONFIGURAÇÃO SUPABASE =====
// IMPORTANTE: Substitua pelos seus dados reais do Supabase

const SUPABASE_URL = 'https://xfageuqkfzatdbpxugcw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_FAnbLZkMdgVzOWAhTi3Iag_vNhcxZ3t';

// Importar cliente Supabase
const { createClient } = supabase;

// Criar cliente
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exportar para uso global
window.supabase = supabaseClient;
