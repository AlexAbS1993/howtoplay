import { FC } from 'react'
import styles from '../styles/UserPhoto.module.css'

type UserPhotoType = {
    photo: string,
    alt?: string
}

export const UserPhoto:FC<UserPhotoType> = ({photo, alt}) => {
    return (
        <div data-testid="userphoto" className={styles.userphoto}>
            <img  data-testid="userphoto_img" src={photo} alt={alt ?? 'Фото профиля'} className={styles.userphoto_img}/>
        </div>
    )
}