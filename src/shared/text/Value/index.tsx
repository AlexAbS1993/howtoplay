import { FC } from "react"
import styles from './styles/Styles.module.css'

type ValuePropsType = {
    value: string
}

export const Value:FC<ValuePropsType> = ({value}) => {
    return (
        <span className={styles.value}>
            {value}
        </span>
    )
}