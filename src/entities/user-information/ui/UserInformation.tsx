import { useStore } from 'effector-react'
import { FC, useEffect } from 'react'
import { KeyDotValue } from '../../../shared/text/KeyDotValue'
import { fakeGetInformationFX, getInformationAboutUserFX } from '../api/getInformation.API'
import {$UserInformationGetStatus} from '../model/UserInformationData'

type UserInformationPropsType = {
    id: string
}

export const UserInformation:FC<UserInformationPropsType> = ({id}) => {
    let {loading, error, data} = useStore($UserInformationGetStatus)
    useEffect(() => {
        fakeGetInformationFX({
            url: 'test',
            id: id
        })
    }, [id])
    return (
        <>
        {
            loading && <div data-testid='loadID'> Loading </div>
        }
        {
            error && <div data-testid='errorID'> Извините, что-то пошло не так</div>
        }
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