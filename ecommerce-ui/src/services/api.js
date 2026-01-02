import axios from "axios";

const API = axios.create({
  baseURL: "https://connections-2.onrender.com"
});

export default API;
