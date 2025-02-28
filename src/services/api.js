import axios from "axios";

// 86020290/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;