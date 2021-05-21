import axios from 'axios';

export const api = axios.create({
    baseURL:'https://api.chucknorris.io/jokes/'
});

export const postform = axios.create({
    baseURL:'https://webhook.site/7668b714-638a-4916-880c-1b62f5ba56d1'
});
