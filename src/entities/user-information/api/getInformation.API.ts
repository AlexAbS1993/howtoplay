import axios from "axios"
import { createEffect, createEvent} from "effector"

export const getInformationAPI = async(url: string, id: string, options?: any) => {
    let userDataInformation = await axios.get(`${url}/${id}`)
    return userDataInformation.data
}

type getUserInformationType = {
    url: string,
    id: string,
    options?:any
}

export const initialGetInformationEvent = createEvent<void>()

export const getInformationAboutUserFX = createEffect<getUserInformationType, {title: string, value: string}[], Error>({
    handler: async ({url, id, options}) => {
        return await getInformationAPI(url, id, options)
    }
})
