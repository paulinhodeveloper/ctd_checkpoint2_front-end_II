// Importando módulo
import { checkFormValidity } from './checkFormValidity.js';

// Função para selecionar elementos
const gi = e => document.getElementById(e);
const qsa = e => document.querySelectorAll(e);

// Variáveis do campo senha e confirmar senha
const inputTypePassword = qsa('input[type=password]');
const inputPassword = gi('inputPassword');
const inputConfirmPassword = gi('inputConfirmPassword');

//Função para verificar se as senhas são iguais
export const passwordConfirmValidation = () => {

    inputTypePassword.forEach(e => e.addEventListener('keyup', () => {

        // Condição em que o elemento é válido
        if (inputPassword.value == inputConfirmPassword.value) {
            inputConfirmPassword.setCustomValidity('');
        } else {
            inputConfirmPassword.setCustomValidity('invalid');
        };

        const validationId = `${inputConfirmPassword.id}-validation`;
        const isInputValid = inputConfirmPassword.validity.valid;

        if (isInputValid || inputConfirmPassword.value == 0 || inputPassword.value == 0) {
            gi(validationId).innerText = '';
        } else {
            gi(validationId).innerText = 'Senha diferente!';
        };
        checkFormValidity();
    }));
};