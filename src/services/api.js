import axios from "axios";

const api = axios.create({
  baseURL: "http:nuvem42.ddns.net/"
});

export default api;
