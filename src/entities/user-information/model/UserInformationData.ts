import { combine, createEvent, createStore } from "effector"
import { fakeGetInformationFX, getInformationAboutUserFX } from "../api/getInformation.API";

type UserInformationDataType = string[]

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
    console.log(payload)
    return payload
})
