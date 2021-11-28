import { createEffect, createEvent, createStore, sample} from "effector";
import { fakeGetInformationFX, resetEvent } from "../../../entities/user-information";

export const setChangingNow= createEvent() 

export const $isChangingNow = createStore<boolean>(false).on(setChangingNow, (state, payload) => !state)


export const setChangedData = createEvent<any>()
export const setData = createEvent<{
    field: string,
    value: string
}>()
export const setInitialData = createEvent<{[key: string]: string}>()
export const $changedData = createStore<any>({})
.on(setChangedData, (_, payload) => payload)
.on(setData,  (state, payload) => ({
    ...state,
    [payload.field]: payload.value
}))
.on(setInitialData, (state, payload) => ({...payload}))

export const sendChangedDataFX = createEffect<{[key: string]: string}, any>(async () => { })
export const FAKEsendChangedDataFX = createEffect<any, any>(async (data: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Успех")
        }, 2500)
    })
})


const $fakeID = createStore<string>('1')

export const changePendingEvent = createEvent()
export const changeExactPendingEvent = createEvent<boolean>()
export const $changeRequestStatus = createStore<boolean>(false).on(changePendingEvent, (state, payload) => !state)
.on(changeExactPendingEvent, (state, payload) => payload)

FAKEsendChangedDataFX.pending.watch((state, payload) => {
    if (state === true){
        changePendingEvent()
    }
})

FAKEsendChangedDataFX.doneData.watch(() => {
    changePendingEvent()
    resetEvent()
    setChangingNow()
})
sample(
    {
        clock: FAKEsendChangedDataFX.doneData,
        source: $fakeID,
        fn: (payload) => ({
            id: payload,
            url: ''
        }),
        target: fakeGetInformationFX
    }
)