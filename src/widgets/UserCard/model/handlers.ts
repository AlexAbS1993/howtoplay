import { setChangingNow } from "../../../featured/changeUserInfo";
import { fakeInitialGetInformationEvent, initialGetInformationEvent } from "../../../entities/user-information";
import { Event } from "effector";

export const handlers: (Event<void>)[] = [
    setChangingNow,  
    (() => {})  as Event<void>,
    // process.env.NODE_ENV === 'development' ? fakeInitialGetInformationEvent : initialGetInformationEvent,
    fakeInitialGetInformationEvent
]