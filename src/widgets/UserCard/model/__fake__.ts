import { createStore, sample } from "effector";
import { fakeGetInformationFX, fakeInitialGetInformationEvent, resetEvent } from "../../../entities/user-information";


export const $fakeCurrentUserID = createStore<string|null>('1')
fakeGetInformationFX.pending.watch((data) => {
    if (data === true){
        resetEvent()
    }
})

sample({
    clock: fakeInitialGetInformationEvent,
    source: $fakeCurrentUserID,
    fn: (data) => {
        console.log(data)
        return {
            url:'',
            id: data as string
        }
    },
    target: fakeGetInformationFX
})