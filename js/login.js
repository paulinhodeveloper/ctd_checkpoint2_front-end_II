// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variáveis do campo e-mail
const emailId = 'inputEmail';
const inputEmail = gi(emailId);
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailValidation = 'Email inválido.';

// Variáveis do campo senha
const passwordId = 'inputPassword';
const inputPassword = gi(passwordId);
const passwordRegEx = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
const passwordValidation = 'Verifique o Campo (1 letra maiúscula, 1 caractere especial e no mínimo 10 dígitos).';

// Variáveis do elemento button e do form
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

// Função para verificar se o elemento está validado
//      Parâmetros:
//      - element = elemento input
//      - validation = elemento small (validar o input)
//      - validText = texto para validar o elemento input
//      - regEx = RegEx validador do elemento
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

// Invocando função para verificar validação do elemento e inserindo parâmetros
inputValidation(inputEmail, emailId, emailValidation, emailRegEx);
inputValidation(inputPassword, passwordId, passwordValidation, passwordRegEx);

// Enviar formulário
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    form.reset();
    alert('Sucesso!');
});