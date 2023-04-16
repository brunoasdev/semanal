import axios from "axios";

const api = axios.create({
    baseURL: "http://142.4.202.122:8080/events"
});

export default api;