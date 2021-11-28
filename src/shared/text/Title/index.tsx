import { FC } from "react"
import styles from './styles/Title.module.css'

type TitlePropsType = {
    title: string
}

export const Title:FC<TitlePropsType> = ({title}) => {
    return (
        <span className={styles.title}>
            {title}
        </span>
    )
}