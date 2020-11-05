import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333",
});

export default api;

/**
 * iOs com emulador: localhost
 * ios com fisico IP da maquina 
 * Android com emulador : localhost
 * Android com Emulador: 10.0.2.2 (Androd Studio)
 * Android com Emulador (10.0.3.2) (Genymontion)
 * Android com fisico: Ip da máquina
 */