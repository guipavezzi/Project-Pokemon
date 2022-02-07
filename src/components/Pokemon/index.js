import styles from './styles.module.scss'
import { CityContext } from '../../context/cityContext'
import { useContext } from 'react'

export function ShowPokemon(){

    const { pokemon, city } = useContext(CityContext)


    return(
        <div className={styles.pokemon}>
            <div className={styles.pokeInfo}>
                <img src={pokemon.img}/>
                <h2>{pokemon.name}</h2>
                <p>Elemento: {pokemon.element}</p>
            </div>
        </div>
    )
}
