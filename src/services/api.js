import axios from "axios";

const api = axios.create({
    baseURL: "https://aditatiaia.com.br:3009/events"
});

export default api;
