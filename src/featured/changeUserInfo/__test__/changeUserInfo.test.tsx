import { act, render, screen } from '@testing-library/react'
import {UserInformationWithChangableLogin} from '../index'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


const fakeData = [
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
const fakeChangable = ['Имя']

describe('Модуль UserChangedInformation позволяет изменить имя пользователя', () => {
    let i = "0"
    let page
    beforeEach(() => {
        page = render(<UserInformationWithChangableLogin id={i} data={fakeData} changable={fakeChangable} />)
    })
    afterEach(() => {
        page = null
    })
    test("Отрисовывается компонент с инпутами", () => {
        console.log(`----1----`)
        expect(screen.getByText(/знаток/i)).toBeInTheDocument()
    })
    test("Отображается текст в инпутах при вводе", async () => {
        console.log(`----2----`)
        let button:HTMLButtonElement = screen.getByTestId('confirmButton') as HTMLButtonElement
        userEvent.click(button)
        expect(button.disabled).toBe(true)
        await act( async() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 3000)
            })
        })
        expect(button.disabled).toBe(false)
    })
    test("Отображается введённый текст", async () => {
        console.log(`----3----`)
        let input:HTMLInputElement = screen.getByTestId("input_Имя") as HTMLInputElement
        expect(input).toBeInTheDocument()
        userEvent.type(input, 'AbS')
        expect(input.value).toBe("AlexAbS")
    })
    test("Все инпуты становятся недоступны при отправке данных", async() => {
        console.log(`----4----`)
        let button:HTMLButtonElement = screen.getByTestId('confirmButton') as HTMLButtonElement
        let input:HTMLInputElement = screen.getByTestId("input_Имя") as HTMLInputElement
        userEvent.click(button)
         expect(input.disabled).toBe(true)
    })
})