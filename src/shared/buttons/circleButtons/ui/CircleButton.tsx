import { FC } from 'react'
import {Event} from 'effector'
import styles from '../styles/CircleButton.module.css'
export type CircleButtonType = {
    icon: string,
    clickHandler: Event<void>,
    disabled: boolean
}

export const CircleButton:FC<CircleButtonType> = ({
    icon,
    clickHandler,
    disabled
}) => {
    return (
        <button className={styles.circlebutton}
        data-testid='circlebutton'
        onClick={() => {
            return clickHandler()
        }}
        disabled={disabled}
        >
            <img src={icon} alt="иконка меню"/>
        </button>
    )
}