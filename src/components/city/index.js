import styles from './styles.module.scss'
import { CityContext } from '../../context/cityContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

export function City(){

    const { cityRequest } = useContext(CityContext)


    const { register, handleSubmit } = useForm()

    function handleCity(data){
        const name = data.cityName
        cityRequest(name)
    }

    return(
        <div className={styles.city}>
            <h1>Digite Uma cidade</h1>
            <form onSubmit={handleSubmit(handleCity)}>
                <label for="city"/>
                <input {...register("cityName")} type="text"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}