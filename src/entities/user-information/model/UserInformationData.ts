import { combine, createEvent, createStore } from "effector"
import { getInformationAboutUserFX } from "../api/getInformation.API";
import {fakeGetInformationFX} from '../api/__fake__'

type UserInformationDataType = {
    value: string,
    title: string
}[]

export const config = {
    changableFields: ["Имя"]
}
export const resetEvent = createEvent()
export const $fetchError = createStore<string>('')
const $UserInformationData = createStore<UserInformationDataType>([])
.reset(resetEvent)
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

export let errorEvent = createEvent<string>()

getInformationAboutUserFX.fail.watch((payload) => {
    let data = payload.error.toString()
    errorEvent(data)
})

$fetchError.on(errorEvent, (state, payload) => {
    return payload
})