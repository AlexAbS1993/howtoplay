import { createEvent, createStore} from "effector";
export const setChangingNow= createEvent() 

export const $isChangingNow = createStore<boolean>(false).on(setChangingNow, (state, payload) => !state)
