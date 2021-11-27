import { FC} from 'react'
import { KeyDotValue } from '../../../entities/KeyDotValue'
import {config} from '../model/UserInformationData'


type UserInformationPropsType = {
    id: string,
    data: {
        value: string,
        title: string
    }[],
    isChanging?: boolean
}

export const UserInformation:FC<UserInformationPropsType> = ({id, data, isChanging}) => {
    return (
        <>
            { 
            data &&  data.map((element) => {
                    return <KeyDotValue 
                    key={element.title}
                    title={element.title} 
                    value={element.value}
                    couldChange={config.changableFields.some(e => e === element.title) && (isChanging ? true : false)}
                    />
                })
            }
        </>
    )
}