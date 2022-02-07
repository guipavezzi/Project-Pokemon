import { createContext, useState } from "react"
import { getTemperature } from "../api/api"

export const CityContext = createContext()

export function CityProvider({ children }) {
    
    const [city, setCity] = useState({
        temp: null,
        isRain: null,
    })

    const [ pokemon, setPokemon ] = useState({
        name: null,
        element: null,
        img: null,
        url: null
    })

    async function cityRequest(name){
        const { resTemp, resIsRain, resPokemon } = await getTemperature(name)
        setCity({temp: resTemp, isRain: resIsRain })
        setPokemon({ name: resPokemon.pokeName, element: resPokemon.pokeElement, img: resPokemon.imgPoke, url: resPokemon.url })
    }

    return (
        <CityContext.Provider value={{ city, cityRequest, pokemon }}>
            {children}
        </CityContext.Provider>
    )
}