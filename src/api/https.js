import axios from 'axios'

export const keyCity = "&appid=e49bca4c4a14048dc7b8f2acca1b0b28"

export const cityApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})