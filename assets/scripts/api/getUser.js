import {renderUserInfo} from '../modules/renderUserInfo.js'
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
        .then(result => { return result.json(); })
        .then(data => renderUserInfo(data))
        .catch(err => console.log(err));
};