// Função para selecionar elementos
const qs = e => document.querySelector(e);

// Variáveis do elemento button e do form
const submitBtn = qs('button');
const form = qs('form');

// Função para verificar se o formulário está validado
export const checkFormValidity = () => {
    const isFormValid = form.checkValidity();

    // Habilitar e Desabilitar o botão de submit na condição do formulário ser válido ou não
    if (isFormValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', '');
    };
};