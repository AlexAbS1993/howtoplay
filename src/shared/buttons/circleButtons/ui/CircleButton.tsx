import { FC } from 'react'
import {Event} from 'effector'
import styles from '../styles/CircleButton.module.css'
type CircleButtonType = {
    icon: string,
    clickHandler: Event<void>
}

export const CircleButton:FC<CircleButtonType> = ({
    icon,
    clickHandler
}) => {
    return (
        <button className={styles.circlebutton}
        onClick={() => {
            return clickHandler()
        }}
        >
            <img src={icon} alt="иконка меню"/>
        </button>
    )
}