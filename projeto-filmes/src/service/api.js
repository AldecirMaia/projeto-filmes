import axios from "axios";
// Base da API de FILMES: https://api.themoviedb.org/3
//URl da API de FILMES: /movie/now_playing?api_key=d5314587cf6520e31f96c1d7582fdf7f&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;