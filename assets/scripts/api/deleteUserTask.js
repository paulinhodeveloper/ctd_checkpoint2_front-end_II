// Base URL da API
const baseUrl = 'https://ctd-todo-api.herokuapp.com/v1';

export const deleteUserTask = (token, taskId) => {
    const request = {
        method: "DELETE",
        headers: {
            'Authorization': token
        }
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => { return result.json(); })
        .catch(err => console.log(err));
};