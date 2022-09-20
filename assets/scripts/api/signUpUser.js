// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

export const signUpUser = user => {
    const request = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: user
    };

    fetch(`${baseUrl}/users`, request)
        .then(result => {
            if (result.status == 200 || result.status == 201) {
                return result.json();
            } else {
                throw result;
            };
        })
        .then(result => successSignup(result))
        .catch(err => errorSignup(err));
};

const successSignup = result => {
    sessionStorage.setItem('token', result.jwt);
    location = '/';
};

const errorSignup = erro => {
    console.log(erro);
};