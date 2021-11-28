import { FC} from 'react'
import { KeyDotValue } from '../../../entities/KeyDotValue'


type UserInformationPropsType = {
    id: string,
    data: {
        value: string,
        title: string
    }[]
}

export const UserInformation:FC<UserInformationPropsType> = ({id, data}) => {
    return (
        <>
            { 
            data &&  data.map((element) => {
                    return <KeyDotValue 
                    key={element.title}
                    title={element.title} 
                    value={element.value}
                    />
                })
            }
        </>
    )
}