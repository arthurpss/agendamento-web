import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:8080/"
})


export default api;

// Essa URL se refere ao Backend disponivel em: https://github.com/murilo-kronbauer/api-agendamento-web
// Obs: Tem que dar Git Clone e rodar o Backend para funcionar