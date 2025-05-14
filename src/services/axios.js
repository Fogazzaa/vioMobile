import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: "http://10.89.240.91:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const sheets = {
  postLogin: (user) => api.post("login/", user),
  postCadastro: (user) => api.post("user/", user),
  postEvento: (evento) => api.post("evento/", evento),
  postIngresso: (ingresso) => api.post("ing/", ingresso),
  postOrganizador: (organizador) => api.post("org/", organizador),
  getEventos: () => api.get("eventos/"),
  getIngressosPorEvento: (id_evento) => api.get(`ing/evento/${id_evento}`),
  createIngresso: (dados) => api.post("/ing", dados),
};

export default sheets;
