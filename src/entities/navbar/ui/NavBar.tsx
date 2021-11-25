import { FC } from 'react'
import styles from '../styles/NavBar.module.css'

type NavBarType = {}

export const NavBar:FC<NavBarType> = ({children}) => {
    return (
        <div className={styles.navbar} > 
            {children}
        </div>
    )
}