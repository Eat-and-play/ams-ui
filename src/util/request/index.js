import axios from "axios";

const request = axios.create({
  baseURL: 'http://139.155.240.89:8090'
})

export default request