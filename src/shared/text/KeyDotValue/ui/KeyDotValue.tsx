import { FC } from 'react'
import styles from '../styles.KeyDotValue.module.css'

type KeyDotValueType = {
    title: string,
    value: string
}

export const KeyDotValue: FC<KeyDotValueType> = ({title, value}) => {
    return (
        <p className={styles.keyvalueparagraph} key={`${title}${value}`}>
            <span data-testid='span_key' className={styles.keyvalueparagraph_key}>{title}: </span>
            <span data-testid='span_value' className={styles.keyvalueparagraph_value}>{value}</span>
        </p>
    )
}