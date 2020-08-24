const API_URL = 'http://localhost:3000/';

export const doGet = (path) => {
    const url = `${API_URL}${path}`;
    return fetch(url).then(response => response.json());
};