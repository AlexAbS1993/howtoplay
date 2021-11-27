import { FC } from "react"

type UserInformationWithChangableLoginPropsType = {
    id: string,
    data: {
        value: string|FC,
        title: string
    }[]
}

export const UserInformationWithChangableLogin:FC<UserInformationWithChangableLoginPropsType> = ({id, data}) => {
    return (
        <>
           
        </>
    )
}