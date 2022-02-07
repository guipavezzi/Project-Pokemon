
import styles from './styles.module.scss'
import { getTemperature } from '../../api/api'

export function Header(){

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.png" alt='Pokebola'></img>
            <h1>Project Pokemon</h1>
        </header>
    )
}