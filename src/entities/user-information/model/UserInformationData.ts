import { combine, createEvent, createStore } from "effector"
import { fakeGetInformationFX, getInformationAboutUserFX } from "../api/getInformation.API";

type UserInformationDataType = {
    value: string,
    title: string
}[]

export const config = {
    changableFields: ["Имя"]
}

const $fetchError = createStore<string>('')
const $UserInformationData = createStore<UserInformationDataType>([])
export const $UserInformationGetStatus = combine({
    loading: process.env.NODE_ENV === 'development' ? fakeGetInformationFX.pending : getInformationAboutUserFX.pending ,
    error: $fetchError,
    data: $UserInformationData,
  });
export const UserUpdateInformation = createEvent()

$UserInformationData.on(getInformationAboutUserFX.doneData, (state, payload) => {
    return payload
}).on(fakeGetInformationFX.doneData, (state, payload) => {
    return payload
})

let errorEvent = createEvent<string>()

fakeGetInformationFX.fail.watch((payload) => {
    let data = payload.error.toString()
    errorEvent(data)
})
getInformationAboutUserFX.fail.watch((payload) => {
    let data = payload.error.toString()
    errorEvent(data)
})

$fetchError.on(errorEvent, (state, payload) => {
    return payload
})