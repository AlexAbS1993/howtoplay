import { useStore } from "effector-react"
import { FC, useLayoutEffect } from "react"
import { $changedData } from ".."
import { TitleInput } from "../../../shared/KeyDotInput"
import { ConfirmButton } from "../../../shared/buttons/confirmButton"
import images from "../../../shared/images"
import { $changeRequestStatus, FAKEsendChangedDataFX, sendChangedDataEmmiter, setData, setInitialData } from "../model/changeUser"



type UserInformationWithChangableLoginPropsType = {
    id: string,
    data: {
        title: string,
        value: string,
    }[],
    changable: string[]
}

export const UserInformationWithChangableLogin:FC<UserInformationWithChangableLoginPropsType> = ({id, data, changable}) => {
    const inputData = useStore($changedData)
    const changeRequestStatus = useStore($changeRequestStatus)
    useLayoutEffect(() => {
        let result: {
            [key: string]: string
        } = {

        }
        data.forEach((element) => {  
            if (changable.some(field => field === element.title)){
                result[element.title] =  element.value
            }
        })
        setInitialData(result)
    }, [data, changable])
    return (
        <>
          {
              data.map(e => {
                let disabled = changable.some(field => field !== e.title) || changeRequestStatus
                return (
                    <TitleInput 
                    data-testid='input'
                    title={e.title}
                    disabled={disabled}
                    handler={setData}
                    defaultValue={e.value}
                    key={e.title}
                    />
                )
              })
          } 
          <ConfirmButton svg={images.confirm} disabled={changeRequestStatus} clickHandler={() => {
              sendChangedDataEmmiter(inputData)
          }} wait={images.wait}/>
        </>
    )
}
