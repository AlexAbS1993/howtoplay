import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/NavLink.module.css'

export type NavLinkCustomPropsType = {
    path: string,
    text: string
}

export const NavLinkCustom:FC<NavLinkCustomPropsType> = ({path, text}) => {
    return (
        <NavLink to={path} className={({ isActive }) =>
        [
            styles.navlink,
          isActive ? styles.navlink_active : styles.navlink_simple,
          
        ]
          .join(" ")
      }>
            <span>{text}</span>
        </NavLink>
    )
}