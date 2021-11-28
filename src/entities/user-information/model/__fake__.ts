import { fakeGetInformationFX } from "../api/__fake__"
import { errorEvent } from "./UserInformationData"

fakeGetInformationFX.fail.watch((payload) => {
    let data = payload.error.toString()
    errorEvent(data)
})