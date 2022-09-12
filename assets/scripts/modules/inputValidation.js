// Importando módulo
import { checkFormValidity } from './checkFormValidity.js';

// Função para selecionar elementos
const gi = e => document.getElementById(e);

// Função para verificar se o elemento está validado
//      Parâmetros:
//      - element = elemento input
//      - validation = texto para validar o elemento input
//      - regEx = RegEx validador do elemento
export const inputValidation = (element, validation, regEx) => {
    element.addEventListener('keyup', () => {

        // Condição em que o elemento é válido
        if (element.value.match(regEx)) {
            element.setCustomValidity('');
        } else {
            element.setCustomValidity('invalid');
        };

        const validationId = `${element.id}-validation`;
        const isInputValid = element.validity.valid;

        if (isInputValid || element.value == 0) {
            gi(validationId).innerText = '';
        } else {
            gi(validationId).innerText = validation;
        };
        checkFormValidity();
    });
};