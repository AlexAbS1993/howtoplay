import axios from "axios"
import { createEffect, } from "effector"

export const getInformationAPI = async(url: string, id: string, options?: any) => {
    let userDataInformation = await axios.get(`${url}/${id}`)
    return userDataInformation.data
}

export const getInformationAboutUserFX = createEffect({
    handler: async ({url, id, options}: {
        url: string,
        id: string,
        options?: any
    }) => {
        return await getInformationAPI(url, id, options)
    }
})
