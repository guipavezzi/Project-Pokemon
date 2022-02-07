import {cityApi, pokeApi, keyCity} from './https'
import { pokemonType } from '../utils/pokemonType'

import { converToCelsius } from '../utils/convertToCelsius'

export async function getTemperature(city){

    let resTemp, resIsRain, element

    await cityApi.get("/weather?q=" + city + keyCity).then((response) => {
        resTemp = response.data.main.temp
        resIsRain = response.data.weather[0].main == "Rain" ? true : false
    })

    resTemp = await converToCelsius(resTemp)

    element = resIsRain ? "electric" : pokemonType(resTemp)

    const resPokemon = await getPokemon(element)

    return { resTemp, resIsRain, resPokemon }
}


export async function getPokemon(element){

    let idPoke, pokeName, pokeElement, imgPoke, urlPoke

    await pokeApi.get("type/" + element).then((response) =>{
        idPoke = Math.floor(Math.random() * response.data.pokemon.length) + 1
        pokeName = response.data.pokemon[idPoke].pokemon.name
        urlPoke = response.data.pokemon[idPoke].pokemon.url
        pokeElement = element
    })

    await pokeApi.get(urlPoke).then((response) => {
        imgPoke = response.data.sprites.front_default
    })

    return { pokeName, pokeElement, imgPoke, urlPoke }
}