import { UserPhoto } from '../../../entities/user-photo'
import styles from '../styles/UserCard.module.css'
import images from '../../../shared/images/index'
import { $UserInformationGetStatus, UserInformation, getInformationAboutUserFX, fakeGetInformationFX } from '../../../entities/user-information'
import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { InfoLoader } from '../../../shared/loading/informationLoading'
import { icons } from '../model/icons'
import { CircleButton } from '../../../shared/buttons/circleButtons'
import { $isChangingNow, UserInformationWithChangableLogin } from '../../../featured/changeUserInfo'
import { handlers } from '../model/handlers'
import { config } from '../../../entities/user-information/model/UserInformationData'
import { $fakeCurrentUserID } from '../model/__fake__'

type UserCardPropsType = {
    id: string
}

export const UserCard:FC<UserCardPropsType> = ({id}) => {
    const {loading, error, data} = useStore($UserInformationGetStatus)
    const currentUserID = useStore($fakeCurrentUserID)
    const isChanging = useStore($isChangingNow)
    useEffect(() => {
        process.env.NODE_ENV === 'development' ? 
        fakeGetInformationFX({
            url: '/',
            id: id
        })
        :
        getInformationAboutUserFX({
            url: '/',
            id: id
        })
    }, [id])
    return (
        <main className={styles.userinfo}>
            <div className={styles.userinfo_photo}>
                <UserPhoto photo={images.avatar1}/>
            </div>
            <div className={styles.userinfo_info}>
                {
                    loading && <InfoLoader />
                }
                {
                    error && <div> {error} </div>
                }
                {
                    data && (isChanging ? <UserInformationWithChangableLogin id={'1'} data={data} changable={config.changableFields}/>
                     : 
                     <UserInformation id='1' data={data}/>)
                }
            </div>
            <div className={styles.userinfo_buttons}>
                {
                    icons.map((e, i) => {
                        return <CircleButton icon={e} clickHandler={handlers[i]} key={e} disabled={loading}/>
                    })
                }
            </div>
        </main>
    )
}