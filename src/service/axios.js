import axios from "axios";
const api = import.meta.env.VITE_MY_API;

axios.defaults.baseURL = api;
export default axios;
