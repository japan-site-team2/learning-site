import axios from 'axios';
import * as checkToken from '../../constants';
export const URL='http://127.0.0.1:8000';

export const getUser = () => axios({
    method: "get",
    url: `${URL}/api/get_user`,
    params: {"token":`${checkToken.token}`},
    headers: {"Content-Type" : "application/json"},
  })
;
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
