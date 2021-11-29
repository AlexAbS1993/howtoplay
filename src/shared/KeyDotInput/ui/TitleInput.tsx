import React, { FC } from "react"
import { Title } from "../../text/Title"
import styles from '../styles/TitleInput.module.css'

type TitelInputPropsType = {
    defaultValue: string,
    title: string,
    handler: Function,
    disabled: boolean
}

export const TitleInput:FC<TitelInputPropsType> = React.memo(({defaultValue, title, handler, disabled}) => {
    return (
        <>
             <p className={styles.paragraph}>
                    <Title title={title + `: `}/>
                     <input type='text' onChange={(event) => {
                         handler({
                             field: title,
                             value: event.target.value
                         })
                     }}
                     defaultValue={defaultValue}
                     disabled={disabled}
                     className={styles.paragraph_input}
                     data-testid={`input_${title}`}
                     />                    
                     </p>
        </>
    )
})