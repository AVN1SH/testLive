import axios from "axios";

const api = axios.create({
  // baseURL : `${import.meta.env.VITE_MY_API_URI}/api`,
  withCredentials : true
});

export { api }