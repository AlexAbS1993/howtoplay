import axios from "axios"
import { createEffect} from "effector"

export const getInformationAPI = async(url: string, id: string, options?: any) => {
    let userDataInformation = await axios.get(`${url}/${id}`)
    return userDataInformation.data
}

type getUserInformationType = {
    url: string,
    id: string,
    options?:any
}

export const getInformationAboutUserFX = createEffect<getUserInformationType, any[], Error>({
    handler: async ({url, id, options}) => {
        return await getInformationAPI(url, id, options)
    }
})

export const fakeGetInformationFX = createEffect<getUserInformationType, any[], Error>({
    handler: async({url, id}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                        {
                            title: 'Имя',
                            value: "Alex"
                        },
                        {
                            title: 'Сообщений на форуме',
                            value: "12"
                        },
                        {
                            title: 'Знаток игр',
                            value: "4"
                        }
                    ]
                )
            }, 2000)
        })
    }
})
