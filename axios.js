import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8040/api', // Make sure this matches your backend URL
});

export default instance;
