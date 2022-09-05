const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

const emailId = 'inputEmail';
const inputEmail = gi(emailId);
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const passwordId = 'inputPassword';
const inputPassword = gi(passwordId);
const passwordRegEx = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

const submitBtn = qs('button');

const form = qs('form');

// Função para verificar se o formulário está validado

const checkFormValidity = () => {
    const isFormValid = form.checkValidity();
    if (isFormValid) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', '');
    };
};

/*
Função para verificar se o elemento está validado

Parâmetros:
            - element = elemento input
            - validation = elemento small (validar o input)
            - validText = texto para validar o elemento input
            - regEx = RegEx validador do elemento
*/

const inputValidation = (element, validation, validText, regEx) => {
    element.addEventListener('keyup', () => {

        if (element.value.match(regEx)) {
            element.setCustomValidity('');
        } else {
            element.setCustomValidity('invalid');
        };

        const validationId = `${validation}-validation`;
        const isInputValid = element.validity.valid;

        if (isInputValid) {
            gi(validationId).innerText = '';
        } else {
            gi(validationId).innerText = validText;
        };
        checkFormValidity();
    });
};

inputValidation(inputEmail, emailId, 'Email inválido', emailRegEx);
inputValidation(inputPassword, passwordId, 'Verifique o Campo (1 letra maiúscula, 1 caractere especial e no mínimo 10 dígitos)', passwordRegEx);