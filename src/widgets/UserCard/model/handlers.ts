import { setChangingNow } from "../../../featured/changeUserInfo";
import {Event} from 'effector'

export const handlers: Event<void>[] = [
    setChangingNow, 
    (() => {}) as Event<void>, 
    (() => {}) as Event<void>
]