import axios from 'axios'
const URL='http://127.0.0.1:5000';

export const fetchCategories = () => axios.get(`${URL}/users`);
