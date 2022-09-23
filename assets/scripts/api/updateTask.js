import { baseUrl } from './baseUrl.js';

export const updateTask = (token, taskId, task) => {
    const request = {
        method: "PUT",
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: task
    };

    fetch(`${baseUrl}/tasks/${taskId}`, request)
        .then(result => { return result.json(); })
        .catch(err => console.log(err));
};