import axios from "axios";

const customAxios = axios.create({
    baseURL: 'https://localhost:8080/api/auth'
})
export default customAxios;