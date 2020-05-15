import axios from "axios";
import { countries } from "../config";

const countriesService = axios.create({
  baseURL: countries.url
})

countriesService.interceptors.response.use(response => response.data)

export const getCountriesInfo = name => countriesService.get(`${name}`)