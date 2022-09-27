import { renderUserInfo } from '../modules/renderUserInfo.js'
import { baseUrl } from './baseUrl.js';

// Requisição dos dados do usuário na API
export const getUser = token => {
    const request = {
        method: "GET",
        headers: {
            'Authorization': token
        }
    };
    fetch(`${baseUrl}/users/getMe`, request)
        .then(result => {
            if (result.status === 200 || result.status === 201) {
                return result.json();
            } else {
                throw result;
            };
        })
        .then(data => renderUserInfo(data))
        .catch(err => {
            if (err.status === 404) {
                alert('Usuário não existe!');
            } else if (err.status === 500) {
                alert('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde!');
                location.href = '../index.html';
            };
        });
};