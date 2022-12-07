
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://mama-ativa-back.glitch.me/",
});


export default instance;