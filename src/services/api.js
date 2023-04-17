import axios from "axios";

const api = axios.create({
    baseURL: "https://agenda.aditatiaia.com.br:8080/events"
});

export default api;
