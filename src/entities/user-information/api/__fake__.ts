import { createEffect, createEvent } from "effector"

type getUserInformationType = {
    url: string,
    id: string,
    options?:any
}

export const fakeInitialGetInformationEvent = createEvent<void>()

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
