import axios from "axios";
import { weather } from "../config";

const weatherService = axios.create({
  baseURL: weather.url
})

weatherService.interceptors.response.use(response => response.data)

export const getWeatherInfo = query => weatherService.get(`/current`, { params: { access_key: weather.key, query } })