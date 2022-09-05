// Funções para selecionar elementos
const qs = e => document.querySelector(e);
const gi = e => document.getElementById(e);

// Variáveis do campo nome
const firstNameId = 'inputFirstName';
const inputFirstName = gi(firstNameId);
const firstNameRegEx = /^\S$|^\S[ \S]*\S$/;
const firstNameValidation = 'Formato inválido.';

// Variáveis do campo sobrenome
const lastNameId = 'inputLastName';
const inputLastName = gi(lastNameId);
const lastNameRegEx = /^\S$|^\S[ \S]*\S$/;;
const lastNameValidation = 'Formato inválido.';

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

// Variáveis do campo repetir senha
const confirmPasswordId = 'inputConfirmPassword';
const inputConfirmPassword = gi(confirmPasswordId);

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

//Função para verificar se as senhas são iguais
const passwordConfirmValidation = () => {

    // Verificar se as senhas são iguais ao digitar/focar no campo de repetir senha
    const repeatPasswordValidation = () => {
        if (inputPassword.value == inputConfirmPassword.value) {
            inputConfirmPassword.setCustomValidity('');
        } else {
            inputConfirmPassword.setCustomValidity('invalid');
        };

        const validationId = `${confirmPasswordId}-validation`;
        const isInputValid = inputConfirmPassword.validity.valid;
        if (isInputValid) {
            gi(validationId).innerText = '';
        } else {
            gi(validationId).innerText = 'Senha diferente!';
        };
        checkFormValidity();
    };

    ['focus', 'keyup'].forEach(evt =>
        inputConfirmPassword.addEventListener(evt, repeatPasswordValidation, false)
    );

    // Verificar se as senhas são iguais ao digitar/focar no campo senha apenas se já foi digitado algum valor
    const passwordValidation = () => {
        if ((inputPassword.value.length !== 0 && inputConfirmPassword.value.length !== 0) && (inputPassword.value !== inputConfirmPassword.value)
            || (inputPassword.value.length !== 0 && inputConfirmPassword.value.length !== 0) && (inputPassword.value == inputConfirmPassword.value)
        ) {
            if (inputPassword.value == inputConfirmPassword.value) {
                inputConfirmPassword.setCustomValidity('');
            } else {
                inputConfirmPassword.setCustomValidity('invalid');
            };

            const validationId = `${confirmPasswordId}-validation`;
            const isInputValid = inputConfirmPassword.validity.valid;
            if (isInputValid) {
                gi(validationId).innerText = '';
            } else {
                gi(validationId).innerText = 'Senha diferente!';
            };
            checkFormValidity();
        };
    };

    ['focus', 'keyup'].forEach(evt =>
        inputPassword.addEventListener(evt, passwordValidation, false)
    );
};

// Invocando função para verificar validação do elemento e inserindo parâmetros
inputValidation(inputEmail, emailId, emailValidation, emailRegEx);
inputValidation(inputPassword, passwordId, passwordValidation, passwordRegEx);
inputValidation(inputFirstName, firstNameId, firstNameValidation, firstNameRegEx);
inputValidation(inputLastName, lastNameId, lastNameValidation, lastNameRegEx);
passwordConfirmValidation();

// Enviar formulário
submitBtn.addEventListener('click', e => {
    e.preventDefault();

    // Retirar múltiplos espaços do input nome e sobrenome ao enviar o formulário
    let firstNameValue = inputFirstName.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    let lastNameValue = inputLastName.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    console.log(firstNameValue);
    console.log(lastNameValue);

    alert('Sucesso!');
});