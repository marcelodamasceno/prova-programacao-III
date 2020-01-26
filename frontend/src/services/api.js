import axios from 'axios';

const api = axios.create({
    baseURL: 'https://provafinal04.herokuapp.com/'
});

export default api;