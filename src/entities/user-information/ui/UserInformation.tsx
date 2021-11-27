import { FC} from 'react'
import { KeyDotValue } from '../../../shared/text/KeyDotValue'


type UserInformationPropsType = {
    id: string,
    data: string[]
}

export const UserInformation:FC<UserInformationPropsType> = ({id, data}) => {
    return (
        <>
            { 
            data &&  data.map((element) => {
                    return <KeyDotValue 
                    title={''} 
                    value={element}/>
                })
            }
        </>
    )
}