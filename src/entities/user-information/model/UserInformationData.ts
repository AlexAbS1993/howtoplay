import { combine, createEvent, createStore } from "effector"
import { getInformationAboutUserFX } from "../api/getInformation.API";

type UserInformationDataType = {
    title: string
}[]

const $fetchError = createStore<string>('')
const $UserInformationData = createStore<UserInformationDataType>([])
export const $UserInformationGetStatus = combine({
    loading: getInformationAboutUserFX.pending,
    error: $fetchError,
    data: $UserInformationData,
  });
export const UserUpdateInformation = createEvent()
$UserInformationData.on(getInformationAboutUserFX.doneData, (state, payload) => {
    console.log(payload)
    return payload
})