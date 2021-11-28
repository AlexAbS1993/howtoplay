import { FC, MouseEventHandler } from "react"
import styles from '../styles/ConfirmButton.module.css'

type ConfirmButtonPropsType = {
    svg: string,
    disabled: boolean,
    clickHandler: MouseEventHandler<HTMLButtonElement>,
    wait: string
}
export const ConfirmButton:FC<ConfirmButtonPropsType> = ({svg, disabled, clickHandler, wait}) => {
    return (
        <button className={styles.confirmButton} disabled={disabled}
        data-testid='confirmButton'
         onClick={clickHandler}
         >
                {
                    disabled ? <img src={wait} alt="Ждите"/> : <img src={svg} alt="Кнопка подтвердить"/>
                }
        </button>
    )
}