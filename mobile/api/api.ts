import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // depois você pode trocar pelo IP do servidor
  timeout: 10000,
});

export default api;
