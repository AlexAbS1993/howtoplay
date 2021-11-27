import { UserPhoto } from '../../../entities/user-photo'
import styles from '../styles/UserCard.module.css'
import images from '../../../shared/images/index'
import { $UserInformationGetStatus, UserInformation, fakeGetInformationFX } from '../../../entities/user-information'
import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { InfoLoader } from '../../../shared/loading/informationLoading'


type UserCardPropsType = {
    id: string
}

export const UserCard:FC<UserCardPropsType> = ({id}) => {
    const {loading, error, data} = useStore($UserInformationGetStatus)
    useEffect(() => {
        fakeGetInformationFX({
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
                    data && <UserInformation id='1' data={data}/>
                }
            </div>
            <div className={styles.userinfo_buttons}>

            </div>
        </main>
    )
}