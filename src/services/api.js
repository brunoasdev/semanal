import axios from "axios";

const api = axios.create({
    baseURL: "http://142.4.202.122:3009/events"
});

export default api;
