// ===== FUNÇÕES AUXILIARES =====

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

function getMonthName(monthNumber) {
    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[monthNumber - 1];
}

function getCurrentMonth() {
    const today = new Date();
    return {
        month: today.getMonth() + 1,
        year: today.getFullYear()
    };
}

function getPreviousMonth() {
    const today = new Date();
    const previous = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    return {
        month: previous.getMonth() + 1,
        year: previous.getFullYear()
    };
}