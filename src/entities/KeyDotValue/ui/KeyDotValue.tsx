import { FC } from 'react'
import styles from '../styles/KeyDotValue.module.css'

type KeyDotValueType = {
    title: string,
    value: string,
}

export const KeyDotValue: FC<KeyDotValueType> = ({title, value, children}) => {
    return (
        <p className={styles.keyvalueparagraph}>
            <span data-testid='span_key' className={styles.keyvalueparagraph_key}>{title}: </span>
            <span data-testid='span_value' className={styles.keyvalueparagraph_value}> <>{value}</></span>
        </p>
    )
}