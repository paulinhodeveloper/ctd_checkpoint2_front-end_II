
let btnEnviar = document.getElementById("envio");
let inputEmail = document.getElementById("inputEmail");

inputEmail.addEventListener('keyup', function (email) {

    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputEmail.value.match(mailFormat)) {

        inputEmail.style.borderColor = "#228b22";
        inputEmail.style.backgroundColor = "#ffffff";
        emailValid.innerText = ""

        return true;
    }
    else {

        inputEmail.style.borderColor = "#e32636";
        inputEmail.style.backgroundColor = "#ffffff";

        emailValid.innerText = "Verifique o Campo.";
        emailValid.style.color = "#e32636"
        emailValid.style.fontWeight = "bold"

        return false;
    }

});

inputPassword.addEventListener('keyup', function (senha) {

    var passwordFormat = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

    if (inputPassword.value.match(passwordFormat)) {

        inputPassword.style.borderColor = "#228b22";
        btnEnviar.style.backgroundColor = "#908E8E";
        passwordlValid.innerText = ""

        return true;
    }
    else {
        inputPassword.style.borderColor = "#e32636";
        btnEnviar.style.backgroundColor = "#908E8E";
    
        passwordlValid.innerText = "Verifique o Campo (1 letra maiúscula, 1 caractere especial e no mínimo 10 dígitos)";
        passwordlValid.style.color = "#e32636"
        passwordlValid.style.fontWeight = "bold"

        return false;
    }

});


document.querySelector('#form-header').addEventListener('submit', function (e) {

    // Isso impede que o form seja enviado ao clicar no botão de envio do formulário

    //e.preventDefault();   

    //aqui vai ser implementado o envio e validações

    if (senha == true && email == true) {

        btnEnviar.style.backgroundColor = "red";

    }

});