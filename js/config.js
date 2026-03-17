// ===== CONFIGURAÇÃO SUPABASE =====
// IMPORTANTE: Substitua pelos seus dados reais do Supabase

const SUPABASE_URL = 'https://xfageuqkfzatdbpxugcw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_secret_ZFxPqz0fTGlVsCTeqV2K5A_VIM8cR3r';

// Importar cliente Supabase
const { createClient } = supabase;

// Criar cliente
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Exportar para uso global
window.supabase = supabaseClient;