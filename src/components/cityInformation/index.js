import { useContext } from "react";
import { CityContext } from "../../context/cityContext";

import styles from './styles.module.scss'


export function CityInfo(){

    const { city } = useContext(CityContext)
    
    return(
        <div className={styles.cityInfo}>
            <div>
                <h2>Temperatura: {city.temp}°C</h2>
            </div>
        </div>
    )
}