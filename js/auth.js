// ===== AUTENTICAÇÃO =====

async function checkAuth() {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user && !window.location.pathname.includes('index.html')) {
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
    }
}

async function getAuthUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// Login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
        }

        showAlert('✅ Login realizado com sucesso!', 'success');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);

    } catch (error) {
        console.error('Erro no login:', error);
        showAlert('Erro: ' + error.message, 'danger');
    }
}

// Logout
async function logout() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        showAlert('Erro ao fazer logout', 'danger');
    }
}

// Carregar email lembrado
window.addEventListener('DOMContentLoaded', () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.value = rememberedEmail;
        }
    }
});