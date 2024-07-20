import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // Asegúrate de que la URL base sea correcta
  headers: {
    "Content-Type": "application/json",
  },
});

export { AxiosInstance };
